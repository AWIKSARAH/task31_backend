import contactModel from "../models/contactModel.js";
import { BadRequestError } from "../errors.js";

export async function createMessage(req, res, next) {
  const { name, message, subject, tel } = req.body;
  try {
    if (!name || !message || !subject || !tel) {
      throw new BadRequestError(
        "All the input was Required please make sure to fill all !"
      );
    }

    await contactModel.create({
      name,
      message,
      subject,
      tel,
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
}
