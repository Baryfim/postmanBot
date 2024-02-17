import { Markup } from "telegraf";
import { LISTENER, PARTICIPANT, RESTART } from "../consts";

export const typeKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback(PARTICIPANT.text, PARTICIPANT.callback),
        Markup.button.callback(LISTENER.text, LISTENER.callback),
    ],
    [
        Markup.button.callback(RESTART.text, RESTART.callback)
    ]
])