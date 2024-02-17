import { Markup } from "telegraf";
import {
    CHANGE_NAME_BTN,
    CHANGE_TYPE_BTN,
    CHANGE_AGE_BTN,
} from "../consts"

export const changeUserData = Markup.inlineKeyboard([
    [Markup.button.callback(CHANGE_NAME_BTN.text, CHANGE_NAME_BTN.callback)],
    [Markup.button.callback(CHANGE_AGE_BTN.text, CHANGE_AGE_BTN.callback)],
    [Markup.button.callback(CHANGE_TYPE_BTN.text, CHANGE_TYPE_BTN.callback)]
])