import { db } from "@db";
import { messages, type InsertMessage } from "@shared/schema";

export const storage = {
  async insertMessage(messageData: InsertMessage) {
    try {
      const [newMessage] = await db.insert(messages)
        .values({
          name: messageData.name,
          email: messageData.email,
          subject: messageData.subject,
          message: messageData.message,
          created_at: new Date().toISOString(),
          read: false
        })
        .returning();
      
      return newMessage;
    } catch (error) {
      console.error("Error inserting message:", error);
      throw error;
    }
  },
  
  async getAllMessages() {
    try {
      return await db.select().from(messages).orderBy(messages.created_at, 'desc');
    } catch (error) {
      console.error("Error getting messages:", error);
      throw error;
    }
  },
  
  async markMessageAsRead(id: number) {
    try {
      const [updatedMessage] = await db.update(messages)
        .set({ read: true })
        .where(messages.id, '=', id)
        .returning();
      
      return updatedMessage;
    } catch (error) {
      console.error("Error marking message as read:", error);
      throw error;
    }
  }
};
