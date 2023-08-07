import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().minLength(2),
  email: vine.string().email(),
  password: vine.string().minLength(4).maxLength(20).confirmed(),
});
