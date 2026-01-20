import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),

    // core info
    name: varchar("name", { length: 120 }).notNull(),
    slug: varchar("slug", { length: 140 }).notNull(),
    tagline: varchar("tagline", { length: 200 }),
    description: text("description"),

    // media
    websiteUrl: text("website_url"),
    tags: json("tags").$type<string[]>(), 

    // voting sys stuff
    voteCount: integer("vote_count").notNull().default(0),

    // metadata
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    approvedAt: timestamp("approved_at", { withTimezone: true }),
    status: varchar("status", { length: 20 }).default("pending"), // pending approved rejected states typ shi
    submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),
    userId: varchar("user_id", { length: 255 }), // clerk id lmao i just farted when i typed this

    // org ref
    organizationId: varchar("organization_id", { length: 255 }), // clerk org id
  },
  (table) => ({
    slugIdx: uniqueIndex("products_slug_idx").on(table.slug),
    statusIdx: index("products_status_idx").on(table.status),
    organizationIdx: index("products_organization_idx").on(
      table.organizationId
    ),
  })
);