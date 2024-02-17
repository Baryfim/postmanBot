import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { StartTextMsg } from "../text/start.text";

export class StartCommand extends Command {
    constructor (bot: Telegraf<IBotContext>) {
        super(bot);
    }

    private startController = async (ctx: IBotContext) => {
        await ctx.replyWithHTML(
            StartTextMsg, 
            Markup.inlineKeyboard([
                Markup.button.webApp('Начать 💫', `https://8961-93-125-107-11.ngrok-free.app/?userId=${ctx?.from?.id}`),
            ])
        )
    }

    

    handle(): void {
        this.bot.command('start', async (ctx) => {
            this.startController(ctx)
        });
    }
}
