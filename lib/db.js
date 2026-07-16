import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL);

// Confirmed against the cfr_chunks schema: the text column is `content` and the
// vector column is `embedding`. These are the only two existing columns the
// ingest path writes to by name.
export const CONTENT_COL = "content";
export const EMBEDDING_COL = "embedding";
