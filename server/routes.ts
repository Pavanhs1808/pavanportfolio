import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy to avoid rate limits
  app.get("/api/github/:username", async (req, res) => {
    try {
      const { username } = req.params;
      
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }
      
      const repos = await response.json();
      
      res.json(repos);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to fetch GitHub repositories" 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Store message in database
      const newMessage = await storage.insertMessage(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact message submitted successfully" 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false,
        error: "Failed to save contact message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
