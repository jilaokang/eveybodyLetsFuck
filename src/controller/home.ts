import Roomsmodel, { Rooms } from "./../models/rooms";

export default class home {
  public static async roomList(ctx) {
    // 获取到的token
    console.log(`token is ${ctx.get('auth')}`);
    ctx.body = { message: "放在这里" };
  }

  public static async roomadd(ctx) {
    console.log(`token is:${ctx.request.body}`);
    const { roomname, roomintroduce } = ctx.request.body;
    // 异步函数
    const findone = await Roomsmodel.findOne({ roomname: roomname });
    if (findone) {
      ctx.body = { message: "已经存在该房间" };
    } else {
      new Roomsmodel({
        roomname: roomname,
        roomintroduce: roomintroduce,
        user: null,
        people: 1
      }).save();
      ctx.body = { message: "房间已经创建成功" };
    }
  }
}
