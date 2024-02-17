import { Markup } from "telegraf";
import { RESTART } from "../consts";

export const restartKeyboard = Markup.inlineKeyboard([
    Markup.button.callback(RESTART.text, RESTART.callback)
])