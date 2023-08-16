import { Action, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Hi! 👋');
    await ctx.reply('Что ты хочешь сделать?', this.appService.getButtons());
  }

  @Action('list')
  getAll() {
    return 'OK';
  }
}
