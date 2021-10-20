/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Welcome to the crazy world of": "欢迎来到疯狂的世界关于",
    "Buy more land to create even bigger empire. Go ahead, buy some!": "购买更多土地以创建更大的帝国。 来吧，买一些！",
    "Challenges": "挑战",
    "Factory": "工厂",
    "Gigafactory": "大型工厂",
    "Income": "收入",
    "Kilofactory": "小型工厂",
    "Loading... hold on...": "加载中... 请稍候...",
    "Megafactory": "中型工厂",
    "Play": "开始",
    "PLAY": "开始",
    "Price": "价格",
    "Research": "研究",
    "SELECT": "选择",
    "Terafactory": "超级工厂",
    "Test your knowledge with these custom scenarios. May cause brain injury!": "使用这些自定义场景测试您的知识。 可能导致脑损伤！",
    "ticks/sec": "tick/秒",
    "to spend. Isn't that nice.\n    Average total income": "要花。 是不是很好。\n 平均总收入",
    "TOO EXPENSIVE": "太贵了",
    "Just focus (click) the game to deactivate": "只需聚焦（单击）游戏即可停用",
    "normal speed": "正常速度",
    "You don't have enough money to buy this factory!": "你没有足够的钱去购买这家工厂！",
    "Don't worry, game runs at": "别担心，游戏运行在",
    ", just uses a lot less CPU (power) thanks to not updating some graphical\n    elements.": "，由于不更新某些图形\n 元素，因此只使用更少的 CPU（功率）。",
    "Background mode active": "后台模式激活",
    "ticks": "tick",
    "ticks and sends it to conveyors.\n        Should have": "tick并将其发送到传送带。\n 应该有",
    "ticks uses": "tick用途",
    "Time travel": "时间旅行",
    "to produce": "去生产",
    "Upgrades": "升级",
    "Stock": "库存",
    "Show whole map": "显示整个地图",
    "Reset": "重置",
    "Pause": "暂停",
    "Normal": "正常",
    "Money": "钱",
    "out conveyor(s).": "输出传送带。",
    "Iron seller": "铁出售者",
    "Iron ore buyer": "铁矿石购买者",
    "Iron ore": "铁矿石",
    "iron ore": "铁矿石",
    "Iron foundry": "铸造厂",
    "Iron": "铁",
    "iron": "铁",
    "Help": "帮助",
    "for": "",
    "Fast >>": "快 >>",
    "Factories": "工厂",
    "Extra": "额外",
    "Efficiency": "效率",
    "Conveyor": "输送带",
    "Buy for": "购买成本",
    "Clear tracks": "清除轨道",
    "Components": "组件",
    "Bonus ticks": "奖励tick",
    "after every": "每隔",
    "/tick (avg": "/tick (平均",
    ".\n        Should have at least": ".\n 至少应该有",
    "\n\n        \n        Buys": "\n\n        \n        购买",
    "You can find your user hash also in the settings.": "您也可以在设置中找到您的用户哈希值。",
    "You seem to be enjoying the game! Here is a good tip that maybe will save the day once!": "看来你玩游戏很开心啊！ 这是一个很好的提示，也许可以挽救一天的进度！",
    "Your user hash": "您的用户哈希值",
    "SAVE USER HASH TO A SAFE PLACE!": "将用户哈希保存到安全的地方！",
    "Make a copy of your user hash. User hash is used to find your save game and purchases if you have any.": "复制您的用户哈希值。 用户哈希用值于查找您的游戏存档和购买（如果有）",
    "If you lose this, there is pretty much no way to restore your game. Play safe and keep a backup!": "如果你失去了这个，几乎没有办法恢复你的游戏。 安全操作并保留备份！",
    "Ignore this reminder if you already did and have fun!": "如果您已经这样做并玩得开心，请忽略此提醒！",
    "OK": "好的",
    " after\n        every": "每隔",
    "After every": "每隔",
    "Transports items from one component to another. Can take in 1 item/tick.\n        \n\n        \n": "将物品从一个组件传输到另一个组件。 可以接收 1 个物品/tick。\n \n\n \n",
    "\n        No save exists on": "\n 暂无存档",
    "* If you have made purchases, you keep unlocks like faster ticks, but lose consumed items like bonus ticks": "* 如果您进行了购买，您会像更快的tick一样保持解锁状态，但会丢失已消耗的物品，如奖励tick",
    "* Manual saves will not be deleted and can be used to restore the game": "* 手动存档不会被删除，可用于恢复游戏",
    "auto saves": "自动保存",
    "Back to factory": "返回工厂",
    "Click here to copy to clipboard": "点击这里复制的剪切板",
    "Close": "关闭",
    "Collecting some cash": "收集一些现金",
    "Getting money": "赚到钱",
    "Getting smarter": "变得更聪明",
    "Have avg income greater than": "平均收入大于",
    "Have more money than": "有更多的钱",
    "If you have existing user key, copy it here and click update.": "如果您有现有的用户密钥，请将其复制到此处并单击更新。",
    "Making profit!": "盈利！",
    "Notice that": "请注意",
    "or select user id and\n    press CTRL+C (windows) or CMD+C (mac) to copy it.": "或选择用户 ID 并\n 按 CTRL+C (windows) 或 CMD+C (mac) 复制它。",
    "Research research center": "研究研究中心",
    "Resets the game": "重置游戏",
    "Switch user key": "切换用户秘钥",
    "There is no way to restore your game if this key gets lost!": "如果此密钥丢失，将无法恢复您的游戏！",
    "this slot yet": "这个插槽还",
    "This is your unique user key. Keep it safe and have a backup!": "这是您唯一的用户密钥。 保持安全并有备份！",
    "This will reload the page with new account.": "这将使用新帐户重新加载页面。",
    "to your computer every 5 seconds and to cloud every 15 minutes.": "每 5 秒向您的计算机发送一次，每 15 分钟向您的计算机发送一次。",
    "Unlocks extras": "解锁额外功能",
    "Unlocks research": "解锁研究",
    "Unlocks upgrades": "解锁升级",
    "Use manual save if you want to experiment and might need to get your game back to earlier state. Game": "如果您想尝试并可能需要让您的游戏恢复到早期状态，请使用手动保存。 游戏",
    "You have been warned!": "你已经被警告了！",
    "User key": "用户秘钥",
    "BUY": "购买",
    "Allows researching more technologies": "允许研究更多技术",
    "Research applies to every factory.": "研究适用于每个工厂。",
    "research points and": "研究点和",
    "technologies.": "技术。",
    ". Use it wisely!\n        You have researched": ". 明智地使用它！\n你已经研究过",
    "Allows steel production": "允许钢铁生产",
    "Each level gives +1 tick/sec": "每个级别提供 +1 tick/秒",
    "research points": "研究点",
    "research points.\n    Avg production": "研究点。\n 平均产量",
    "ticks.": "tick.",
    "Yes, buy": "是的，购买",
    "Production bonus of each": "生产奖励对于每个",
    "metal report": "金属报告",
    "Metal report": "金属报告",
    "Are you sure you want to buy this area for": "您确定要购买此区域吗",
    "No": "不",
    "\n    You have": "\n    你有",
    "sell": "出售",
    "sells": "出售",
    "sells with": "出售",
    "to spend. Make it count!": "要花。 算一算！",
    "Upgrades apply only to this area.": "升级仅适用于该区域。",
    "You haven't bought any, can't sell": "你没有买，不能出售",
    "uses and produces": "使用和生产",
    "more resources.": "更多资源.",
    "Resources sale price": "资源销售价格",
    "More resources sold per tick in average => more money": "平均每刻卖出更多资源 => 更多钱",
    "More production per component, but expenses are proportionally the same. More production per component => more resources to sell.": "每个组件的产量更高，但费用按比例相同。 每个组件的产量增加 => 可销售的资源更多。",
    "Iron buyer": "铁购买者",
    "higher price.": "更高价格。",
    "Current total increase": "当前总增幅",
    "buys": "购买",
    "Current total buy resources bonus": "当前总购买资源奖励",
    "Bought": "已买",
    "Amount of resources used and produced amount": "资源使用量和生产量",
    "Amount of resources sold": "资源销售量",
    "Amount of resources component buys": "资源组件购买",
    "Sell for": "出售",
    "<< Paused >>": "<< 已暂停 >>",
    "Maxed!": "最大!",
    "You don't have enough money!": "你没有足够的钱！",
    "\n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n        Produces": "生产",
    "running costs are reduced by": "运行成本降低了",
    "Steel foundry": "钢铸造厂",
    "Steel": "钢",
    "steel": "钢",
    "Steel seller": "钢出售者",
    "Increases running cost by": "增加运行成本",
    "Reduce running costs": "降低运行成本",
    "Current total decrease": "当前总下降",
    "Coal buyer": "煤购买者",
    "Coal": "煤",
    "coal": "煤",
    "and": "和",
    "Allows researching metals": "允许研究金属",
    "Allows plastic production": "允许塑料生产",
    "after\n        every": "每隔",
    "No save exists on": "暂无存档",
    "Ticks": "tick",
    "You don't have enough money to buy selected area": "您没有足够的钱购买所选区域",
    "Accepts any item and discards it as garbage.": "接受任何物品并将其作为垃圾丢弃。",
    "Garbage": "垃圾",
    "items.": "物品.",
    "ticks removes": "tick移除",
    "alu": "铝",
    "You can use them any time you like after the purchase.": "购买后，您可以随时使用它们。",
    "Wow, really?": "哇塞！真的么？",
    "up to 200ticks/sec": "高达 200tick/秒",
    "Unfortunately you don't have any tickets...": "可惜没有票。。。",
    "Travel quickly through space and time to build your empire faster.": "快速穿越时空以更快地建立您的帝国。",
    "Ticks run fastest if game runs in background mode - not focused": "如果游戏在后台模式下运行，tick运行速度最快 - 窗口未聚焦",
    "ticks and get": "tick并得到",
    "tickets for time travel!": "时间旅行的门票！",
    "These are your combined avg incomes from all factories.": "这些是您从所有工厂获得的综合平均收入。",
    "Sorts resources on lines to different paths": "将线路上的资源排序到不同的路径",
    "research points (": "研究点 (",
    "research paper bonus increased by": "研究论文奖金增加了",
    "Research paper bonus": "研究论文奖金",
    "refresh": "刷新",
    "Plastic seller": "塑料出售者",
    "Plastic maker": "塑料制作者",
    "plastic": "塑料",
    "Oil buyer": "石油购买者",
    "per tick": "每刻",
    "oil": "石油",
    "more items": "更多物品",
    "Max stock size": "最大库存尺寸",
    "Makes game ticks run really fast -": "使游戏tick运行得非常快 -",
    "max stock increased by": "最大库存增加",
    "It might be wise to wait until your factories balance": "等到你的工厂平衡可能是明智的",
    "income and research points.": "收入和研究点。",
    "\n    But as making games is very time consuming (I have two young children and a full time job at a startup. So if you can\n    relate, imagine that :p),\n    I highly appreciate any support - would it be ideas, comments, criticism or monetary!": "\n 但由于制作游戏非常耗时（我有两个年幼的孩子和一家初创公司的全职工作。所以如果你能\n 联系起来，想象一下：p），\n 我非常感谢任何支持 - 是吗？ 想法、评论、批评或金钱！",
    " Garbage removes": "垃圾清除",
    ". Please attach your user key.": ". 请附上您的用户密钥。",
    "\n    With this game I have good ideas on what features to add and if you like this game, I kindly ask you to show your\n    support by making a\n    purchase. I don't expect these games to pay a salary, but to cover at least some of the time I put into making them.\n    :": "\n 对于这款游戏，我对添加哪些功能有很好的想法，如果您喜欢这款游戏，我恳请您通过购买\n 来表达您的\n 支持。 我不希望这些游戏支付薪水，但至少可以支付我投入制作它们的一些时间。\n：",
    "waste": "废物",
    "I really don't like monetizing strategies games use nowadays - pay for every freaking move, so most certainly I will\n    not follow them.": "我真的不喜欢现在游戏使用的货币化策略 - 为每一个奇怪的举动付费，所以我肯定\n不会遵循它们。",
    "Getting there faster": "更快到达那里",
    "Get more tickets": "获取更多门票",
    "Get it!": "得到它！",
    "Gas buyer": "天然气购买者",
    "gas": "天然气",
    "Evolved brain": "进化大脑",
    "Each ticket will give you": "每张票都会给你",
    "Each ticket gives you": "每张票都给你",
    "Current total bonus": "当前总奖励",
    "Chronobooster": "时空加速器",
    "Any purchase will remove ads and scales game to use whole screen. (Only if played at factoryidle.com": "任何购买都将删除广告并缩放游戏以使用整个屏幕。 （仅当在 factoryidle.com 上播放时",
    "Amount of resources removed": "移除的资源量",
    "Allows researching gas and oil": "允许研究天然气和石油",
    "Allows electronics production": "允许电子产品生产",
    "8 extra ticks per second": "每秒 8 个额外tick",
    "3x research points production": "3x 研究点产量",
    "3 hour": "3 小时",
    "Takes in any element and sorts them to different outputs.": "接收任何元素并将它们排序到不同的输出。",
    "Produces": "生产",
    "This is taking way longer than it should.": "这比它应该花费的时间更长。",
    "Check": "检查",
    "* Try to refresh.": "* 尝试刷新。",
    "* Make sure you don't have ancient brower.": "* 确保你没有使用古老的浏览器。",
    "* Internet connection and it's speed.": "* 互联网连接和它的速度。",
    "* Check developer console to see errors and report these to developer.": "* 检查开发人员控制台以查看错误并将这些报告给开发人员。",
    ", like tanks and rockets! Seriously, high quality!": "，像坦克和火箭！ 认真，高质量！",
    "!\n    Your goal here is to build an": "!\n 你在这里的目标是建立一个",
    ".\n    You start with simple stuff and later produce": ".\n 你从简单的东西开始，然后产生",
    ". If you have more than one, turn them all ON! Overheat warning!": ". 如果您有多个，请将它们全部打开！ 过热警告！",
    "brain": "大脑",
    "automated factory": "自动化工厂",
    "Disclaimer": "免责声明",
    "except factory workers, always sue them for messing up your conveyors!": "除了工厂工人，总是起诉他们弄乱了你的传送带！",
    "factory idle": "工厂放置",
    "FACTORY IDLE": "工厂放置",
    "for good ideas.": "好的想法。",
    "harder than an average": "比一般人更难",
    "help section": "帮助部分",
    "high quality military technology": "高质量的军事技术",
    "idle game and requires to turn on a": "放置游戏并需要打开一个",
    "not an easy one": "不是一件容易的事",
    "Ok, got it and I will not sue anyone!": "好的，明白了，我不会起诉任何人！",
    "Path to complicated products is": "通往复杂产品的道路是",
    "production chains": "生产链",
    "This game is": "本游戏是",
    "though, so be warned! There will be great challenges ahead waiting for you!\n    Check": "不过，请注意！ 前方将有巨大的挑战等着你！\n检查",
    "gas&oil report": "油气报告",
    "with many": "和很多",
    "jet fuel": "喷气燃料",
    "diesel": "柴油机",
    "Plastic": "塑料",
    "Gas": "天然气",
    "Waste": "废物",
    "Allows guns production": "允许枪支生产",
    "Diesel": "柴油",
    "Electronics maker": "电子产品制造商",
    "Electronics seller": "电子产品销售商",
    "Gas&oil report": "油气报告",
    "Jet fuel": "喷气燃料",
    "Oil": "石油",
    "Plastic production will not produce waste": "塑料生产不会产生废物",
    "Silicon buyer": "硅购买者",
    "electronics": "电子产品",
    "Electronics": "电子产品",
    "Silicon": "硅",
    "silicon": "硅",
    "!\n    Your goal here is to pass": "!\n 你在这里的目标是通过",
    "achievements.": "成就.",
    "Except factory workers, sue them for sending boxes in such a complicated manner to your conveyors!": "除了工厂工人，起诉他们以如此复杂的方式将箱子送到您的传送带！",
    "Factory missions": "工厂任务",
    "FACTORY MISSIONS": "工厂任务",
    "Have fun! You have completed": "玩得开心！ 你已经完成",
    "missions where you construct": "你建造的任务",
    "of": "",
    "Path to success is": "成功之路是",
    "puzzle game and requires to turn on a": "益智游戏，需要打开一个",
    "Build on a secret spot!": "在秘密地点建造！",
    "really hard": "真的很难",
    "Achievement": "成就",
    "Do things economically": "经济地做事",
    "Fail level": "失败等级",
    "Mission completed": "任务已完成",
    "Secret spot somewhere...": "某处的秘密地点...",
    "You have completed the mission!": "你已经完成了任务！",
    "You managed to fail the mission...": "你成功地完成了任务......",
    "Restart": "重新开始",
    "Creates": "创建",
    "ACHIEVEMENT!": "成就！",
    "Get": "获得",
    "here.": "这里.",
    "red box": "红箱子",
    "Red box": "红箱子",
    "blue box": "蓝箱子",
    "Blue box": "蓝箱子",
    "green box": "绿箱子",
    "orange box": "橙箱子",
    "Orange box": "橙箱子",
    "Green box": "绿箱子",
    "purple box": "紫箱子",
    "Yellow box": "黄箱子",
    "Purple box": "紫箱子",
    "Orange in": "橙色输入",
    "Red in": "红色输入",
    "Blue in": "蓝色输入",
    "Purple in": "紫色输入",
    "Yellow in": "黄色输入",
    "Green in": "绿色输入",
    "Orange out": "橙色输出",
    "Red out": "红色输出",
    "Purple out": "紫色输出",
    "Yellow out": "黄色输出",
    "Blue out": "蓝色输出",
    "Green out": "绿色输出",
    "Sends total of": "发送总数为",
    "ticks and sends them to conveyors": "tick 并将它们发送到传送带",
    "Blue to red": "从蓝到红",
    "Blue to green": "从蓝到绿",
    "Get 15 red boxes to red box inputs": "获取15个红箱子 到 红色箱子输入",
    "Hint: Construct conveyor from \"out\" to \"color converter\"": "提示：建造从“输出”到“颜色转换器”的传送带",
    "Get boxes to correct outputs": "获取箱子以正确的输出",
    "Are you sure?": "你确定吗？",
    "Cancel": "取消",
    "This will remove all components from the map": "这将从地图中删除所有组件",
    "Ok": "确定",
    "Duplicator": "复印机",
    "Get 8 red boxes to each input.": "为每个输入获取 8 个红色框。",
    "Hint: Use \"space\" key to toggle between conveyor and mouse": "提示：使用 \"空格\" 键在传送带和鼠标之间切换",
    "Get boxes to correct inputs": "获取箱子以正确输入",
    "Hint: merge & split": "提示：合并和拆分",
    "Produce 10 blue, green and red boxes and send them to correct inputs.": "生成 10 个蓝色、绿色和红色箱子并将它们发送到正确的输入。",
    "Play factory idle!": "玩工厂放置！",
    "Play reactor idle!": "玩核反应堆放置！",
    "* All bonus missions": "* 所有奖励任务",
    "* Everything unlocked": "* 解锁全部",
    "* Huge support for future games!": "* 对未来游戏的巨大支持！",
    "* Support for future games!": "* 支持未来的游戏！",
    "Any purchase will remove ads (Only if played at missions.factoryidle.com": "任何购买都将删除广告（仅当在missions.factoryidle.com 玩时",
    "BONUS": "奖励",
    "Bonus missions": "奖励任务",
    "Get 9 blue boxes to input.": "获得 9 个蓝色箱子输入。",
    "Distribute boxes correctly in order from top 4,3,2,1.": "从顶部 4,3,2,1 开始按顺序正确分配盒子。",
    "Get EXACTLY 30 boxes to purple input.": "获得 30 个箱子到紫色输入。",
    "Get them": "得到它",
    "Hint: Delay every second red box.": "提示：每隔一个红色箱子延迟一次。",
    "Hint: Delay red boxes": "提示：延迟红箱子",
    "Hint: Use duplicator to create 3 boxes out of one": "提示：使用复印机从一个盒子中创建 3 个盒子",
    "Huge support package": "巨大的支持包",
    "Open all and bonus": "打开所有和奖励",
    "Spend less than $700!": "花不到$700！",
    "Support package": "支持包",
    "You managed to fail the level! Ooops...": "你成功通过了关卡！ 666...",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Mission goal": "任务目标",
    "MISSION": "任务",
    "Hint: Construct conveyor from \"out\" to \"in\"": "提示：建造从“出”到“入”的传送带",
    "Get 10 red boxes to each red input.": "为每个红色输入获取 10 个红色框。",
    "FINISHED!": "完成!",
    "FAILED!": "失败！",
    "Clear all": "清除所有",
    "Back to missions": "返回任务",
    "* Multiple outputs from same component can also be used for sorting": "* 同一组件的多个输出也可用于排序",
    "* More challenging missions as time goes on!": "* 随着时间的推移，更多具有挑战性的任务！",
    "* Joy and happiness when you finally do! :)": "* 当你终于做到时，喜悦和幸福！ :)",
    "* Frustration if you can't figure it out": "* 如果你想不通就会感到沮丧",
    "\n    I really like making games and have been building them from my free time for a very long time. (Check my games": "\n 我真的很喜欢制作游戏，并且在很长一段时间内都利用空闲时间制作游戏。 （检查我的游戏",
    "\n    If you travel now you will pass": "\n 如果你现在旅行，你会通过",
    "* If you have problems with purchases, write to": "* 如果您在购买时遇到问题，请写信至",
    "* Bigger and more complicated factories consisting of complicated product chains.": "* 由复杂的产品链组成的更大更复杂的工厂。",
    "* Joy and happiness when you make a mess! :)": "*当你一团糟时的喜悦和幸福！ :)",
    "* More challenging game play as time goes on!": "* 随着时间的推移，更具挑战性的游戏玩法！",
    "* Sorter needs to be configured -": "* 需要配置分拣机-",
    "* Sorter is a safe way to sort out waste in your production lines.": "* 分拣机是一种对生产线中的废物进行分拣的安全方式。",
    "Frequent questions": "常见问题",
    "* Ultimately you can use sorter component, but it also has its flaws.": "* 最终您可以使用分拣机组件，但它也有其缺陷。",
    "* Multiple outputs from same component can also be used for sorting, but may jam if line gets full.": "* 同一组件的多个输出也可用于排序，但如果线路已满，则可能会卡住。",
    "* Splitting conveyor path can be used to sort resources, but has limited throughput.": "* 分割输送路径可用于分拣资源，但吞吐量有限。",
    "* Producing 20 items over 10 ticks means you need two output lines to get 100% efficiency.": "* 生产 20 个项目超过 10 个刻度意味着您需要两条输出线才能获得 100% 的效率。",
    "* You can construct multiple input/output lines from/to same component. Very useful if component produces more than one resource per tick.": "* 您可以从/到同一组件构建多条输入/输出线。 如果组件每次生成多个资源，则非常有用。",
    "* Order of outputs/inputs and conveyor crossings is always": "* 输出/输入和传送带交叉的顺序总是",
    "* It can happen if one of the lines gets full, therefore all resources would be sent to another output lines.": "* 如果其中一条线已满，则可能会发生这种情况，因此所有资源都将发送到另一条输出线。",
    "* You probably didn't :) Think through your setup 3 times, if still seems like a bug, ask forums for a solution.\n        Don't forget that this game is designed to be more difficult and challenging than an average game in the same category.": "* 你可能没有 :) 仔细考虑你的设置 3 次，如果仍然看起来像一个错误，请向论坛寻求解决方案。\n 不要忘记这个游戏的设计比普通游戏更难和更具挑战性 同一类别。",
    "by selecting any component from left panel and right clicking on the map to clear its footprint.": "通过从左侧面板中选择任何组件并右键单击地图以清除其足迹。",
    "As balancing late game is quite hard because of different ways how you can setup things - what do you think about the balance of new stuff? Is it too easy/too hard?": "由于平衡后期游戏非常困难，因为您可以通过不同的方式设置事物 - 您如何看待新事物的平衡？ 是不是太容易/太难了？",
    "and set which exit should transport waste (or some other resource": "并设置哪个出口应该运输废物（或其他资源",
    "and read stats using the cursor \"component\".": "并使用光标“组件”读取统计信息。",
    "Acquired with any new purchase after this release or older non consumable purchases": "在此版本之后的任何新购买或较旧的非消耗品购买中获得",
    ". This rule works everywhere.": ". 这个规则适用于任何地方。",
    "- Toggle mouse to last selected component and back": "- 将鼠标切换到最后选择的组件并返回",
    "- Sell components by selecting any component from left panel and right clicking on the map to clear its footprint.\n        (You can hold down mouse and move around to clear whole area quickly.": "- 通过从左侧面板中选择任何组件并右键单击地图以清除其足迹来出售组件。\n（您可以按住鼠标并四处移动以快速清除整个区域。",
    "- most actions, buy component etc.": "- 大多数动作，购买组件等。",
    "Check that you actually transport everything out from buyer. Sometimes one exit conveyor is not enough.": "检查您是否确实从买方那里运送了所有物品。 有时一个出口传送带是不够的。",
    "Click on one and then click on the map to where you would like to place it.": "单击一个，然后在地图上单击要放置它的位置。",
    "click on the sorter": "点击分拣器",
    "Depending on your upgrades, these numbers may be very odd, then use your best judgement to get the best layout :) (Like in other places you don't need good judgement :p": "根据您的升级，这些数字可能非常奇怪，然后使用您的最佳判断来获得最佳布局 :) （就像在其他地方一样，您不需要很好的判断 :p",
    "Drag the map around": "左右拖动地图",
    "For a 100% effective layout you need 4 iron buyers, 2 iron foundry and 1 seller.": "对于 100% 有效的布局，您需要 4 个铁买家、2 个铸铁厂和 1 个卖家。",
    "Frequently asked questions": "经常问的问题",
    "from": "从",
    "from inside the component to the component you want the conveyor to drop off.": "从组件内部到您希望传送带落下的组件。",
    "Have fun!": "玩得开心！",
    "Getting started": "入门",
    "I found a bug": "我发现了一个错误",
    "If anyone wants a challenge - fit research center 4 to first map! That should be quite a challenge to do :": "如果有人想要挑战 - 将研究中心 4 安装到第一张地图上！ 这应该是一个相当大的挑战：",
    "If game is closed you will get bonus ticks that allow the game to be run really fast.": "如果游戏关闭，您将获得奖励tick，让游戏运行得非常快。",
    "If you bought an upgrade that changes production in a way you don't like, just sell it and all good.": "如果您购买的升级产品以您不喜欢的方式改变了生产，只需将其出售即可。",
    "In the start you should produce": "一开始你应该生产",
    "Keys": "快捷键",
    "Labs give huge bonus to research centers, so use them as many as you can afford if you want to research new more advanced technologies.": "实验室为研究中心提供了巨大的奖励，因此如果您想研究更先进的新技术，请尽可能多地使用它们。",
    "": "",
    "Later as you research more technologies, these relationships change. For each component a chart shows how much of everything you need.": "后来随着您研究更多技术，这些关系会发生变化。 对于每个组件，图表显示您需要多少东西。",
    "Later sorters will help to organize waste handling, additionally you can research clean production that will remove waste completely after you get electronics.": "后来的分拣器将有助于组织废物处理，此外，您可以研究清洁生产，在您获得电子产品后将彻底清除废物。",
    "Left click": "左键单击",
    "Left panel contains components.": "左面板包含组件。",
    "Let me know at Reddit/Kongregate - what do you think!": "在 Reddit/Kongregate 告诉我 - 你怎么看！",
    "Luckily for you, setting up a lab can be quite a task. Labs require many different resources to be effective, but at the same time make production chain quite costly.": "幸运的是，建立实验室可能是一项艰巨的任务。 实验室需要许多不同的资源才能有效，但同时使生产链成本很高。",
    "Make conveyors by click dragging": "通过点击拖动制作传送带",
    "Offline progress?": "离线进度？",
    "Plastic production is a bit more complicated, as it also produces waste.": "塑料生产有点复杂，因为它也会产生废物。",
    "Premium version for factoryidle.com": "factoryidle.com 的高级版",
    "Pro tips": "专业提示",
    "Quite a huge update that adds a lot of new content to the game!": "相当大的更新，为游戏增加了很多新内容！",
    "Resources come out clockwise starting from top left: plastic, waste, plastic, waste and so on. Using this piece of information, you can design your layout.": "资源从左上角开始顺时针出现：塑料、废物、塑料、废物等。 使用这条信息，您可以设计您的布局。",
    "Right click OR SHIFT + left click/drag": "右键单击或 SHIFT + 左键单击/拖动",
    "Sell components": "出售组件",
    "Setting up iron production": "设置铁生产",
    "Setting up lab production": "设置实验室生产",
    "Setting up plastic production": "设置塑料生产",
    "Setting up plastic": "设置塑料",
    "Setting up sorter": "设置分拣器",
    "Some upgrades may seem useless at some points - just don't buy them yet - they will be useful later. It is wise to think which upgrades are good for you and which are not.\n        For example sometimes buying 3 upgrades at once would mean you don't need to change your layout. But buying one of them would mean you have to redesign a lot.": "某些升级在某些时候可能看起来毫无用处——只是先不要购买它们——它们以后会有用。 明智的做法是考虑哪些升级对您有益，哪些不适合。\n 例如，有时一次购买 3 次升级意味着您无需更改布局。 但是购买其中之一意味着您必须重新设计很多。",
    "Sorter": "分拣器",
    "SPACE": "空格键",
    "This is a huge balancing update! I have received a lot of feedback that it is an idle game, but still felt a bit too slow. Well now this update makes the game progress a lot faster!\n            Depending on your progress, it can be up to 3x faster": "这是一个巨大的平衡更新！ 我收到很多反馈说这是一个空闲游戏，但仍然感觉有点太慢了。 好吧，现在这个更新让游戏进度快了很多！\n 根据你的进度，它最多可以快 3 倍",
    "to connect components, so they start producing stuff.": "连接组件，所以他们开始生产东西。",
    "top -> right -> bottom -> left (clockwise": "上 -> 右 -> 下 -> 左（顺时针",
    "Updates": "更新",
    "UPDATES": "更新",
    "Upgrade is useless.": "升级也没有用。",
    "Use conveyors": "使用传送带",
    "Why can't I get 100% efficiency for a buyer": "为什么我无法为购买者获得 100% 的效率",
    "What to expect?": "期待什么？",
    "Waste & plastic switched order": "废物和塑料交换顺序",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "\n\n        \n\n        \n        ": "\n\n        \n\n        \n        ",
    "\n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n        ": "\n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n        ",
    "\n\n        \n\n        \n\n        \n        Sells": "\n\n        \n\n        \n\n        \n        出售",
    "Slot ": "插槽 ",
    "Version ": "版本 ",
    "1. ": "1. ",
    "2. ": "2. ",
    "3. ": "3. ",
    "4. ": "4. ",
    "5. ": "5. ",
    "6. ": "6. ",
    "7. ": "7. ",
    "refunds ": "退款 ",
    "\n        ": "\n        ",
    "Research center": "研究中心",
    "Chronometer": "天文台",
    "Steel components": "钢组件",
    "Plastic components": "塑料组件",
    "Metals lab": "金属实验室",
    "Sorter": "分拣器",
    "\n\n        \n\n        \n\n        \n        ": "\n\n        \n\n        \n\n        \n        ",
    "\n\n        \n\n        \n\n        \n\n        \n\n        \n        ": "\n\n        \n\n        \n\n        \n\n        \n\n        \n        ",
    "\n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n        ": "\n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n\n        \n        ",
    "Electronics components": "电子元件",
    "Gas&Oil lab": "油气实验室",
    "Gun components": "枪部件",
    "Clean plastic production": "清洁塑料生产",
    "\n\n        \n        ": "\n\n        \n        ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\n        \n            \n        \n        ": "\n        \n            \n        \n        ",
    "\n        ": "\n        ",
    "Costs": "成本",
    "\n    \n": "\n    \n",
    "\n        \n            \n        ": "",
    "\n        \n\n        \n\n        \n\n        \n\n        \n": "\n        \n\n        \n\n        \n\n        \n\n        \n",
    "\n        \n            \n        ": "",
    "\n        \n            \n        ": "\n        \n            \n        ",
    "\n        \n        \n": "\n        \n        \n",
    "\n        \n            \n        ": "\n        \n            \n        ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+) (\d+)$/,
    /^\$([\d\.]+) (\d+)$/,
    /^\$([\d\.]+) billion$/,
    /^\$([\d\.]+) trillion$/,
    /^\$([\d\.]+) quadrillion$/,
    /^\$([\d\.]+) quintillion$/,
    /^\$([\d\.]+) billion$/,
    /^\$([\d\.]+) million$/,
    /^([\d\.]+)e(\d+)$/,
    /^\$([\d\.]+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) million$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Spend only (.+)$/, '只需花 $1'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^(.+)\% more$/, '$1\% 更多'],
    [/^(.+)\% cheaper!$/, '便宜 $1\%'],
    [/^(.+) bonus ticks$/, '$1 奖励tick'],
    [/^\n(.+)Research center\n(.+)$/, '\n$1研究中心\n$2'],
    [/^\n(.+)Chronometer\n(.+)$/, '\n$1天文台\n$2'],
    [/^\n(.+)Steel components\n(.+)$/, '\n$1钢制组件\n$2'],
    [/^\/([\d\.]+) items$/, '\/$1 物品'],
    [/^([\d\.]+) ticket \((.+)$/, '$1 门票 \($2'],
    [/^([\d\.]+) tickets \((.+)$/, '$1 门票 \($2'],
    [/^([\d\.]+) tickets  \((.+)$/, '$1 门票 \($2'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^\$([\d\.]+)\/tick$/, '\$ $1\/tick'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '使用：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);