import './_astro_actions_DBo3xHku.mjs';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { E as EMAIL } from './config_3g-haG59.mjs';
import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Section, Hr, Row, Column, Link, Html, Head, Font, Tailwind, Body, Container, Heading, Text } from '@react-email/components';
import { A as AstroError, k as ActionCalledFromServerError } from './astro/assets-service__hnFVCW5.mjs';
import { i as isActionAPIContext } from './utils_Cwo9_uli.mjs';
import { c as callSafely, b as ActionError, d as ActionInputError } from './shared_updZfYkR.mjs';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import { createHash } from 'node:crypto';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function" || !isActionAPIContext(this)) {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

const resend = new Resend("re_Q5QBc7Sp_JFN4pXZ8EY7fYhbgPEKngJh8");
async function createContact({
  audienceId,
  email
}) {
  try {
    const resp = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false
    });
    if (resp.error) throw resp.error.message;
    return resp.data;
  } catch (error) {
    throw error;
  }
}
async function deleteContact({
  audienceId,
  email
}) {
  try {
    const resp = await resend.contacts.remove({
      audienceId,
      email
    });
    if (resp.error) throw resp.error.message;
    return resp.data;
  } catch (error) {
    throw error;
  }
}
async function sendEmail({
  reactTemplate: react,
  subject,
  to
}) {
  try {
    const resp = await resend.emails.send({
      from: EMAIL.from,
      react,
      subject,
      to: [to]
    });
    if (resp.error) throw resp.error.message;
    return resp.data;
  } catch (error) {
    throw error;
  }
}

function Footer() {
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Hr, { className: "border-border" }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsx(Link, { className: "text-muted-foreground text-sm underline", children: "desuscribirse" }) }),
      /* @__PURE__ */ jsx(Column, { align: "right", children: /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-muted-foreground text-sm underline",
          href: EMAIL.originUrl,
          children: "imangelo.dev"
        }
      ) })
    ] })
  ] });
}

function Root({ children }) {
  return /* @__PURE__ */ jsxs(Html, { lang: "es", children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx(
      Font,
      {
        fontFamily: "Inter",
        fallbackFontFamily: "Helvetica",
        webFont: {
          url: "http://imangelo.dev/fonts/InterVariable.woff2",
          format: "woff2"
        },
        fontWeight: "<weight>",
        fontStyle: "normal"
      }
    ) }),
    /* @__PURE__ */ jsx(
      Tailwind,
      {
        config: {
          theme: {
            extend: {
              colors: {
                background: "#fbfbf9",
                foreground: "#4a4c42",
                accent: {
                  foreground: "#1b1b18"
                },
                muted: {
                  foreground: "#9a9a98"
                },
                link: "#0680f9",
                border: "#ebebea"
              }
            }
          }
        },
        children: /* @__PURE__ */ jsx(Body, { className: "bg-background text-foreground font-sans", children: /* @__PURE__ */ jsxs(Container, { className: "pt-10 px-6 pb-8", children: [
          children,
          /* @__PURE__ */ jsx(Footer, {})
        ] }) })
      }
    )
  ] });
}

function Welcome({ recommendedArticleUrl }) {
  return /* @__PURE__ */ jsxs(Root, { children: [
    /* @__PURE__ */ jsx(Heading, { className: "text-xl text-accent-foreground", as: "h1", children: "¡Gracias por suscribirte!" }),
    /* @__PURE__ */ jsx(Text, { children: "A partir de ahora, recibirás notificaciones cuando suba un nuevo artículo, o cuando quiera comunicar algo relacionado. Podrás desuscribirte al final de cada correo." }),
    /* @__PURE__ */ jsx(Text, { className: "font-medium", children: "¡Gracias por apoyar este proyecto!" }),
    /* @__PURE__ */ jsxs(Text, { children: [
      "Por lo pronto, te dejo con",
      " ",
      /* @__PURE__ */ jsx(Link, { className: "text-link", href: recommendedArticleUrl, children: "uno de mis artículos favoritos" }),
      "."
    ] })
  ] });
}

const newsletterSubscription = defineAction({
  input: z.object({
    email: z.string().email()
  }),
  handler: async ({ email }) => {
    await createContact({
      audienceId: "fa4dc4e4-8f20-4fca-9635-41cf756d8d30",
      email
    });
    const recommendedArticleUrl = EMAIL.favoriteArticleUrls[Math.floor(Math.random() * EMAIL.favoriteArticleUrls.length)];
    await sendEmail({
      reactTemplate: Welcome({ recommendedArticleUrl }),
      subject: "¡Gracias por suscribirte!",
      to: email
    });
    return { success: true };
  }
});

const newsletterUnsubscription = defineAction({
  input: z.object({
    email: z.string()
  }),
  handler: async ({ email }) => {
    await deleteContact({
      audienceId: "fa4dc4e4-8f20-4fca-9635-41cf756d8d30",
      email
    });
    return { success: true };
  }
});

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://imangelo-dev-michelangelo-valderrama.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mzc0NjUwMjUsImlkIjoiNGJmZTFkMTktZjA2Mi00ZjlhLTg4OTItNDQwZWVkNWVmNDdiIn0.vbAKreXoEPIF3GxtSJ4wcCpbZdILB_L5D2cE5mu3ra0UKjoNV9csRvZr1PEIgOTWYZH4BvvQXXMRCo6696xoBQ"
});
const ArticleData = asDrizzleTable("ArticleData", { "columns": { "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "ArticleData", "primaryKey": true } }, "hits": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "hits", "collection": "ArticleData", "primaryKey": false, "optional": false, "default": 0 } }, "likesByUser": { "type": "json", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "likesByUser", "collection": "ArticleData", "default": {} } } }, "deprecated": false, "indexes": {} }, false);

async function hash(message) {
  const $hash = createHash("sha256");
  return $hash.update(message).digest("hex");
}

const SUCCESS_RESPONSE = { success: true };
const setLikes = defineAction({
  input: z.object({
    slug: z.string(),
    numLikes: z.number()
  }),
  handler: async ({ numLikes: likesGiven, slug }, { clientAddress }) => {
    const userId = await hash(clientAddress);
    try {
      const artData = await db.select().from(ArticleData).where(eq(ArticleData.slug, slug)).get();
      if (!artData) {
        await db.insert(ArticleData).values({
          hits: likesGiven,
          likesByUser: {
            [userId]: likesGiven
          },
          slug
        });
        return SUCCESS_RESPONSE;
      }
      const currentLikesByUser = artData.likesByUser || {};
      const currentUserLikes = currentLikesByUser[userId] || 0;
      const newUserLikes = Math.min(5, likesGiven);
      const likesDifference = newUserLikes - currentUserLikes;
      if (likesDifference <= 0) return SUCCESS_RESPONSE;
      await db.update(ArticleData).set({
        hits: artData.hits + likesDifference,
        likesByUser: {
          ...currentLikesByUser,
          [userId]: newUserLikes
        }
      }).where(eq(ArticleData.slug, slug));
      return SUCCESS_RESPONSE;
    } catch (error) {
      return { success: false };
    }
  }
});

const getLikes = defineAction({
  input: z.object({
    slug: z.string()
  }),
  handler: async ({ slug }, { clientAddress }) => {
    try {
      const userId = await hash(clientAddress);
      const artData = await db.select().from(ArticleData).where(eq(ArticleData.slug, slug)).get();
      if (!artData) return { userLikes: 0, hits: 0 };
      const currentLikesByUser = artData.likesByUser || {};
      const currentUserLikes = currentLikesByUser[userId] || 0;
      return {
        userLikes: currentUserLikes,
        hits: artData.hits
      };
    } catch (error) {
      return { userLikes: 0, hits: 0 };
    }
  }
});

const server = {
  newsletterSubscription,
  newsletterUnsubscription,
  setLikes,
  getLikes
};

export { server };
