# code review

# 1. what—什么是CR

codereview（CR）一直以来在软件行业被视为提升代码质量的一种有效的方式，也被视为一种工程师文化的代表。关于什么是CR，在google出具体的定义如下：

> 代码评审是指在软件开发过程中，对源代码的系统性。通常的目的是查找系统缺陷，保证软件总体质量和提高开发者自身水平。 Code Review是轻量级代码评审，相对于正式代码评审，轻量级代码评审所需要的各种成本要明显低的多，如果流程正确，它可以起到更加积极的效果。正因如此，轻量级代码评审经常性得被引入到软件开发过程中。
> 

从上面的解释中可以基本上可以看出CR的几个核心关键点：

1. CR应该是**处在研发流程中**，并不是项目结束之后，也就是说CR应该是存在于研发流程之中的事情，只有在过程中进行才能确保最终的交付结果，而不是最后的亡羊补牢和自怨自艾；
2. CR的目的是**提前发现系统缺陷**，进而提前解决，事实上，CR的目的不仅仅是发现问题，而是开发者在一起进行沟通和协同的过程，主要的目的还是为系统质量负责的一种手段，但收益却会远远超过此点；
3. CR是**轻量级代码**的check和沟通，所以说要想完成一次质量很好的CR，前提条件是足够轻量，这个轻量体现在两个方面：一是代码review量，可想而知，如果一次代码量很多，甚至超过几百行，人会产生疲倦感，自然而然review的质量会下降，最后成为了走马观花的形式，也就是说大多数情况下要实现CR需要以小步快跑的方式实现；二是代码结构足够轻量，这个轻量主要是代码结构清晰，最起码的遵守类唯一职责原则以及每个方法的代码行数不宜过多等基本开发约束，只有这些前提满足的情况下，代码结构清晰，更能让reviewers能够理解你想表达的意思，并且，结构清晰会提升代码的美感，自然而然会提升reviewers的参与感和幸福感；
4. 最后有这么一句话是”**如果**流程正确，它可以起到更加积极的效果“，正如万事万物，一半天使一半魔鬼，只有根据团队的情况选择合适的CR方式，才能收获到效果获得收益，否则就会成为负担，成为团队偏离正常轨道的导火线。

可以发现，CR在研发流程中如果合适的引入进来，无疑会大大增强系统的代码质量，促进团队的的发展。但同时，也需要一起根据团队的现实，去因地制宜确定方案。

# 2. Why—为什么要引入CR

关于为什么要引入CR，我也一直在想这个问题，推行CR的最大的阻力无外乎在于**流程的执行需要时间落地，而这部分流程也一定会很重**，一定需要团队在时间上愿意为引入这个流程进行买单。除此之外，不合适的CR方式也一定会造成很多负面的影响：

1. 在CR流程上不对的情况下，一定会出现下面的场景：

> A：这段代码需要在这里，这里，还有那里进行改动；
> 
> 
> B：LZ代码明明质量很好了，you can you up, no can no bb
> 
> A：这段代码你一定要改；
> 
> B：心里很复杂，思想上很累
> 

如果CR执行的流程不对，一定会出现这种情况，如果一旦出现这种情况，CR的推行必然就是会失败的，严重的话会损伤小伙伴感情，同时会影响团队的开发氛围，但我觉得，出现这种情况，有个根本的原因在于CR流程上在**每个阶段上聚集的点不一样**造成的，通俗的来说，就是你在说A，TA在说B，如何解决这样的问题，我的思考会在下面给出。

1. 过分占用开发时间，对于开发者来说，最需要的是安安静静能够开发的时间，如果在CR的过程中没有聚焦点，在个别点的讨论上没有收住的话，对CR来说也是失败的，因为大量的挤占了开发时间，带来的就是开发者又需要熬夜加班，久而久之，就是在心里上建立心里防线和壁垒；

当然关于，CR的引入带来的负面影响应该还有很多。但是，CR会带来哪些收益呢？应该随便列举下就会有这么几点：

1. 提升代码质量
    
    这一点很重要，在what部分已经阐述，无需再赘述；
    
2. 有利于规范的落地
    
    开发规约，但是无法避免的有些还是没有落地遵守，很大一个原因还是每个开发者对开发规约记住部分或者理解的部分在认知层面是不同的，比如有的人可能只对5条理解很透传，而有的人可能理解8条。如果有CR，开发者会有碰撞沟通的机会，就算5+8不能等于13，能够5+8=10的话，对每一个人就都是10了，而不是5和8，这个收益是巨大的。那么，对团队而言，规范是真的落地了。同理，开发规约需要通用性，面对的是大多数开发者，而每个团队会根据自己的业务场景和团队现状制定相应的开发规约，而这部分落地也需要CR去承载，同上面的分析一样，每个人在认知结构上会ownner一部分，再拿出来进行交流，无疑会加速规范的落地；
    
3. 对业务的理解加深
    
    如果是正式的CR（round code-review），即小圆桌CR，会有多个开发者一起参与的CR，必不可少的就会有代码走读，那么走读代码的时候，自然而然会阐述出自己对业务的理解和当前的业务流程，我一直相信，看读写是对一件事情不同理解程度的进阶，我们会根据当前业务编写代码，但是如果我们在走读代码的时候能够按照自己的理解讲出来，对自己而言收获会更大。除此之外，参与到CR也能从中知道其他业务其他同学对其的思考和编码设计，是一个巨大的学习机会。我们总会有这样的焦虑，总感觉自己每次做的是一个xxx模块，对整体缺乏理解，感觉自己永远就是一个码农，我想如果有这样的机会，对系统和业务整体的感知会加强，如果一个开发团队都是一个全能战士，这样的战斗力是巨大的。
    
4. 表达沟通能力的增强
    
    CR是多名开发者参与协同的过程，在代码走读过程中，自身的表达能力肯定会得到锻炼，我们会思考如何准确而清晰的向其他人表达我当前的设计以及当前所要解决的业务问题。同时，当迎来挑战时，如何向挑战者解释当前的逻辑和思考，如果挑战者更加有理，如何有一种欣然接受并表示对提出者表达感谢这样一种高情商的表现。
    
5. 向前辈学习的机会
    
    在工作中，新人总想向前辈学习经验，碍于平时总没有合适的问题场景，有时候去询问前辈也只能停留在表面上的交流，无法针对具体问题场景进行深入分析。CR就是一个很好的机会，产生分歧的时候就是一个具体的问题场景，新人可以就这个场景向前辈们学习他们的设计思考，以及他们的解，点滴的积累，对新人来说无疑会产生质变，对团队而言，老带新在无形之间就完成了传承。所以，CR是一个具体而实在的学习机会，我迫切的向前辈们学习他们的经验和设计方法，也是我强力想落地CR的一个动机。
    
6. 仪式感
    
    生活中需要仪式感，我们会有各种纪念日，以告诉我们自己生活的甜。同样的，在工程师文化中我也认为CR是一件有仪式感的事情，开发者在一起集思广益，本就是一件很幸福的事情，并仅仅只是因为对工程师文化的信仰促成了这件事情。
    

以上是自己认为CR能够带来的优点，也是我认为CR如果落地会带来的收益巨大。如果真要解释why—为什么要引入CR这个问题，无外乎就是需要回答CR能给团队带来什么：

	**找到问题，永远只是CR的副产品！**

	大多数情况下，**找问题会是CodeReview活动启动的初衷，但越到后期它更大的意义将演变成工程师交流土壤的培育和人员成长的促进**。但一般来说，很多团队在CodeReview**前期**重点会是找问题（代码规范、潜在缺陷、BUG，代码设计等等），而**后期**随着问题的逐渐减少和习惯的逐步养成，工程师交流文化的营造将转化成重点，**中期**当有大批新人加入时，找到问题将又上升为重点，如此复始。

	**CodeReview最终的作用将归到促进工程师日常代码交流和人员的成长上面来**，与此同时作为**辅助手段**来对产品质量进行把关。

# 3. Who—参与CR的主体

CR是一项协同活动，在推行CR之前，也需要明确参与到CR的主体。CR这项活跟**团队状态、团队技术信仰以及团队诉求**有关，由于与”人“挂钩也必不可少**跟”人“这个因素有关**，当然必不可少的还有**代码**和参与这项活动的**各个人员**。

## 3.1 什么样的团队需要CR

团队花精力引入CR自然而然是期待这种辅助手段以解决某些问题，也就是说**当前团队希望借助CR以实现进阶突破**，那么下面几种团队类型有必要引入CR：

1. *技术驱动型团队：**一般涉及系统底层逻辑较多，功能路径难以被测试覆盖，而产品质量问题很多时候是致命的，所以这样的团队更多需要开发编码的严谨性和相关代码质量的保证活动；
2. *公共服务型团队：**一般服务于多个团队，一旦出现质量问题影响范围会比较广，所以除了在测试方面加以把关外，通过CodeReview活动来提升开发质量是非常有必要的；
3. *测试缺失型团队：**团队由于缺乏正式专业测试环节，开发自测容易陷入自己的开发逻辑中，以及由于开发者往往只对当前业务模块熟悉，只能覆盖到当前业务模块的测试，针对A和B业务结对可能造成质量问题可能无法覆盖到自测中，质量问题带到线上的风险会很高，强烈建议在CR环节进行沟通碰撞以降低这种风险；
4. *新人密集型团队：**新人的代码可读性往往是比较差的，特别需要组织能及时给予纠正，帮助新人养成良好的编码习惯。同时如果团队产出的代码可读性较高时，新人也可以更快上手工作；
5. *任何有主观意愿的团队：**这样的团队或领导者认同CodeReview的意义，或团队成员对代码质量提升有追求。

那么什么样的团队不需要引入CR呢？

1. *不认同型团队：**即领导和团队骨干都不认同CodeReview意义的团队，这样的团队无论从推动还是坚持上都有很大挑战。
2. *疲于应付型团队：**这种团队一般没有建立必要的持续提升机制，每天淹没在各种需求沟通实现变更和优化中，自然，代码质量提升活动也很难被列入backlog。
3. *创新型团队：**这种团队的重要任务是要把产品快速推向市场进行价值验证，所以在代码编写上要求足够敏捷，代码暂时的混乱完全可以接受。

## 3.2 什么样的代码需要引入CR

CR的另一个主体肯定是代码，也是开发者讨论的主体对象，是不是所有的代码都需要引入CR，我的观点是不必的。

### 3.2.1 哪些代码需要引入CR

> 核心链路业务代码
> 

在复杂的业务场景下，承担主要的业务功能的代码需要拿出来CR，那么如何来衡量哪个部分是核心链路呢？**从业务流量分布上来看**，在互联网应用中有28原则，即80%流量在20%的数据（业务）中，那么这20%的业务代码就是需要拿出来CR的，这部分代码承担了本次迭代核心功能，也是用户最为care的点，同时也是本次软件业务周期中聚焦点，也是PD的强功能性需求，自然而然也是需要被格外重视的地方，如果存在线上风险，损失是巨大的。

> 系统底层框架核心代码
> 

**从系统的基础建设角度来看**，PD的需求一般是功能性需求，无暇顾及到系统的非功能性需求，这部分是开发者赋予系统的健壮性，而这部分关乎到软件系统是否能够提供强健的生命力，也被视为系统的引擎。举例来说，在协同平台项目管理三期项目—里程碑规范中，通过里程碑模板创建里程碑以及里程碑时序规则校验机制，就被视为这期项目的”基础建设“，理所当然也应该被拿出来CR，如果存在问题，必将”风雨袭来，大厦将倾“！

事实上，以上两种类型的代码在技术方案评审就可以被确定下来，并需要进行round CR进行。

### 3.2.2 哪些代码是不需要引入CR

> 业务直译式代码
> 

参照流量分布，总有一部分业务功能并非用户关心的核心功能，只是因为系统功能完整性而存在，或者业务流程很简单，从controller-->service-->dao参照PRD”翻译式“编写的代码（称之为**业务直译式代码**），客观来说并不需要花费长时间进行round CR。但是不是就一定不需要CR呢？也是未必的，只是流程就不需要那么重，可以采用deskmate CR（即同桌间进行沟通），也就是peer programmer（结对编程），两人进行简单高效的沟通即可。

## 3.3 什么样的人需要参与到CR

CR终究是一件与人相关的活动，并且CR的质量也跟人之间沟通协作效率挂钩。因此，要想获得高质量的CR，就需要理清CR中参与的人员角色，并赋予相应的职责。

> 主讲人（speaker）
> 

speaker即为当前走读代码的开发者，我更愿意将其称之为speaker，而不是被review的人。speaker是出现在学术会议以及各种技术会议上，宣讲自己的思想和概念的人。我也认为，每一个走读代码的人，应该抱有这份自信，去向其他开发者合理清晰且逻辑清晰的表达自己的观点，如果自己都不能很自信，如何去说服其他人呢，**代码应该是开发者的艺术品**。所以，对speaker来说有以下职责：

- 应该做的
    1. CR前在脑子里应该**有清晰的脉络**，最好是心里能够默默的说一次，这是speaker的职责，也直接关系到CR的效率和最终的效果；
    2. 增强代码的可阅读性，**学会换位思考**，代码结构一团糟，对reviewers来说CR是绝对不能通过的，要让别人怎么能够看到一团糟的东西有兴趣起来呢？
    3. 更加自信一点，这是每一个**开发者沟通表达的机会**，总有人会吐槽程序员很闷，不善言辞，抓住这些小的机会，你一定会是一个闪光的人。
- 不应该做的
    1. CR前毫无准备，疲于应付，这无疑是浪费大家的时间，如果遇到这种情况，reviewers可以合理的给出建议，督促其意识到问题所在，**CR说到底是一件协同的事情，那么一定要有人遵守这项基本的游戏规则**。
    2. **不要听不进去别人的建议**，欣然接受其他人给出的合理建议，因为这本就是一个很好的学习机会。

> reviewers
> 

reviewers是指对开发者代码提出建议的人，在这里角色中也可被拆分成两类角色：

- reviewer-ownner
    
    这个角色被认为是对当前系统最为熟悉的人，可以说是当前系统的创建人，熟悉系统的各处神经脉络。因此在reviewer时，需要观察**当前开发者的代码是否会伤害已有的架构**。除此之外，这种角色也应该具备业务的感知能力，除了完成当前需求外，**凭借其自身的业务感知能力，应该对当前系统功能走向有所预测**，需要判断当前开发者的代码能够对未来的业务有扩展性和支撑性。这类角色，**遵守的基本原则是”大处着眼“**。
    
- reviewer-expert
    
    事实上，在reviewer-ownner这类角色中基本上已经不是一线开发者，在CR中肯定需要经验丰富的开发者，而这个角色基本上在CR过程中，**凭借其自身的经验会对开发者代码就具体的点提供细致的建议**，而这些建议就是推动团队代码规范以及质量的关键要素，这类角色，**遵守的基本原则是”小处着手“**。
    

那么针对这类角色应尽的职责有哪些呢？

- 应该做的
    1. 以**对系统负责的态度**，切实对speaker的代码进行合理的评价和给出建议；
    2. **不要刻意的去发现问题**，当然CR的主要目的是找出问题，但是在这个过程中，需要**保证心态上的平衡**，刻意的做一件事情就会顾此失彼，失去更重要的东西，我坚信，问题，永远只是CR的副产品。
    3. **不要按照自己的风格去观察别人的代码**，代码是每个开发者的艺术品，在写代码时每个人会有自己的编码风格以及设计思路，如果你一开始就带着有色眼镜去看的话，任何地方都会觉得不顺眼，而忽略重要的东西，而失去了CR的聚焦点。对revierers而言，这也是了解其他思路的一种方式。
    4. **不要质疑别人的能力以及打击的心态**，这种心态在CR过程中是一种大忌，**参与CR中的每个人都应该简单、信任并相互尊重**。如果有这种心态，就会产生不必要的争论，甚至会让CR成为一种心理上的负担；
    5. **不要在不确定的问题上争论太久**，在一些具体的细枝末节上，争论太久会阻塞整体流程，并会造成负面消极的影响，这个时候需要有人中断，暂且搁置争议；
- 不应该做的
    1. **只发表言论，不给出具体方案或可切实执行的意见**。我们都讨厌夸夸其谈的演说家，对每一个参与者来说，都希望在CR过程中学到其他人可以落地有效的解决方案和建议，在CR的过程中，面对的是具体问题，对reviewers来说完全可以就具体问题和开发者一起分析，并结合reviewers已有的技术案例给出具体的方案，这是一个传承的机会。如果只发表言论的话，毕竟从一个请求到最后完成请求的处理，经过了那么多步骤，可以演说的太多，但带来的东西基本为零；

> recorder
> 

在CR的过程中，理所当然需要记录后续的action，也就是说需要这么一个角色负责这个事情。单独需要这么一个角色在于speaker和reviewer在CR过程中需要进行沟通表达，**如果停下来来记录，分散其注意力，整个过程往往就不会一气呵成，会大大损失CR的快感**。那么对这类角色有如下职责：

- 应该做的
    1. **抓住speaker和reviewer的分歧点**，这是CR的产物，也是推动系统进化的突破点，recorder需要对其进行详细记录，作为后续的action。
- 不应该做的
    1. **认为在CR中承担职责不重要**，对recorder而言，**千万不要认为，自己仅仅就是一个记录的人员，就画地为牢，**因为一旦有这样的心态的话，必然会造成在CR过程中精神不集中，漏掉很多有意义的点，实际上，对recorder来说，你也是一名reviewer，只是你需要多承担一部分recorder的职责而已。

以上四个角色会存在在CR过程中，**但四个角色并不一定就是多个人，每一个只负责一个角色**。也有可能是一个人，负责多个角色，比如结对编程中往往只有两个角色，那么这个speaker又要负责代码的走读以及作为recorder进行记录。对角色责任范围一定要理清，不然在CR过程中就是无头苍蝇，找不到发力点。

# 4. Where—不同的研发节点进行CR

CR可以是一个在非常正式的会议室举行，也可以是在同桌同事间进行，也就是说根据CR进行的场所的可以对CR进行分类，实际上，这种分类也从侧面反映出不同的业务场景应该选择什么样的CR形式，[在这篇文章中](https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fpowertoolsteam%2Farticle%2Fdetails%2F81699365)将CR进行了分类，我对其进行总结归纳：

> 同桌（deskmate-CR），也称为结对编程(pair programming)：同桌间就一个问题互相讨论即时(over-the-shoulder)代码审查：当前代码必须被review后才能往下进行，呈阻塞式；工具支持的(tool-assisted)代码审查：将代码提交后，开发者可以继续往下编码，reviewer有空后进行review圆桌CR（round-CR）：就核心代码，组织会议进行CR
> 

如果因为CR流程重浪费时间，最后只停留在结对编程这种阶段最后会造成浮于表面，必将失去效果。结对编程一般是指，开发者知道当前被一个问题卡住了，去和其他人进行沟通，这里，**会有一个很强的假设条件，就是开发者知道当前编码存在问题或者进行不下去了，才会发起这种CR**。事实上，**这种很强的假设条件就是一个危害因子，一旦有假设就必定埋下隐患**。就类似于编码中一旦假设系统非空的强约束，然后线上一旦出现空的情况，瞬间崩溃。事实上，大多数情况下，人会陷入到”**我本以为是对的，实际上是错的**“的境地。如果开发者都能知道问题所在进行解决，那为什么会有那么多线上故障以及风险呢？依赖人性本就是一个危险的举动，仅仅依赖于结对编程的形式的CR本就是一个伪命题。

针对这四种不同形式的CR的适用场景归纳总结如下：

1. 结对编程(pair programming)
    
    当你需要解决一个复杂问题时，这种代码审查的方法很适用。在仔细寻找解决方案的过程中，**把两个人的脑力聚集起来，会增加成功的几率**。让两个头脑思考同一个问题，并相互讨论可行的方案，这样你会更可能覆盖到问题的一些边界情况。结对编程**适用于两个有相似经验水平的开发者处理复杂的业务问题的情况。**
    
2. 即时(over-the-shoulder)代码审查
    
    如果代码编写者缺乏经验，写出的代码需要很大的改进，那么同步代码审查也会很有效。如果一个经验丰富的高级开发者将要对一个很初级的程序员写出的一段代码进行审查，那么，当初级程序员写完代码后就和高级开发者一起改进这段代码，效率是远远高于初级程序员自己一个人看的。但也存在，需要打扰别人的情况，影响工作效率，而对开发者而言，如果不review通过，无法进行下去，是阻塞式。
    
3. 工具支持的(tool-assisted)代码审查
    
    工具支持的(tool-assisted)代码审查，整体流程是异步进行的，开发者提交代码，然后等待reiewer去查看。开发者不需要直接依赖于审查者，并且他们都可以按自己的时间表去做各自的工作。但也存在一个缺点是，review之后，开发者又需要切换回之前的思路去回想之前是怎么想的。
    
4. 圆桌CR（round-CR）
    
    在针对核心流程以及系统基础结构的代码时，往往需要以一种正式的形式去review，以尽早的规避风险。
    

**不同的CR形式的适用场景需要根据当前的代码所要解决的问题属性进行选择**，没有固定的方式，只有合适的方式，比如”直译式业务代码“就可以采用结对编程的方式进行解决，研发过程中足够敏捷的话，可以在选择部分业务节点进行”异步CR“的形式，在”核心业务代码以及基础架构“的代码上就可以引入圆桌CR。

# 5. when--什么时候引入CR

什么时候需要引入CR，这里，从两个维度来看：

1. 对团队而言
    
    CR对于团队来说，必然会占用一部分研发时间，什么样的团队需要引入，在Who—什么样的团队需要引入CR 中进行的介绍。总结起来就是，**愿意培养工程师文化以及培养团队的技术信仰，并愿意为此花费的时间买单**。另外，如果业务迅猛发展，支持业务的发展优先级更高，不引入CR也是正确的，只有最合适，没有最正确。
    
2. 在研发流程的不同节点上来看
    
    在第4部分Where中归纳了四种常见的CR方式，这**四种CR方式的存在也是为了解决不同问题场景而存在的，要根据不同的场景选择合适的方式**。**至少在技术方案确定，业务流程梳理出来的那一刻起，就应该清楚哪些代码实现是需要Round-CR**，因为如果连当前系统迭代的核心都不清楚的话，那么这个技术方案也必然是失败的。
    

# 6. How--如何进行CR

关于如何进行CR，在what、Why、Who和Where几个部分都分别论述了CR的几个关键要素，下面关于CR落地执行给出我的思考。

## 6.1 CR前的准备

1. 团队心智达成一致
    
    CR是一项团队协作的过程，要想能够达到高效率高收益，**出发点必然会是团队成员在意识层面上达成一致，这里需要一种契约精神**，在CR中每个人承担的角色如speaker、reviewer-ownner、reviewer-expert以及recorder在”Who“的部分都给出了相应的责任范围，包含了什么是应该做的，什么是不应该做的论述。每个角色，都应该按各自的角色达成一致，努力并主动的承担这部分职责。
    
2. 合理的选择CR
    
    是不是每个项目就一定需要CR了（或者仅仅采用结对编程的方式），也需要根据事情情况，如果业务发展迅速，或者存在频繁的业务变更，有可能这期项目废了很大的力气去做CR，保证了代码质量，后期业务发生变化，会让这一期的努力付之东流。**业务型系统，永远将业务放在第一位**，如果业务发展快，开发周期短，CR过重必然会造成技术的疲于奔命，团队引擎燃油不足后劲不足的情况。也就是说，CR需要根据当前项目的属性，以及对当前业务的走向趋势进行预测，选择合适的CR的形式，如结对编程或者round-CR。**又想要A又想要B，往往是一种引火自焚的方式。**
    
3. 确定checklist
    
    在CR前，需要根据团队的现状，制定CR的checklist，也就是在CR中必须要检查的项目，如代码的规范性等多个方面。
    
4. 控制CR的粒度
    
    对代码来说，可想而知，如果一个链路过长，代码量过多的话，基本会让人心烦意乱，更谈不上给出合理的建议了。也就是说CR的频率，以及对代码的粒度要进行控制，而这部分也应该是在团队进行规定；
    
5. 心态上的准备
    
    CR是一个协同和沟通的过程，对新人来说渴望经过CR能够学习到前辈们的经验以及从前辈们那里得到切实的指导，无论是哪一个角色上，在心态上都应该保证平等尊重，简单且信任的态度，不要抱有挑剔的眼光以及炫技的心态。
    

## 6.2 CR的流程

整体CR流程如下：

[https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09fd4e25601745f29274cd471d496056~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09fd4e25601745f29274cd471d496056~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

从上图可以看出主要分为三个部分：

1. 业务review
    
    待开发者提交代码后，需要按照团队制定的checklist进行业务评审，这部分主要是check有没有处理一些异常case，在业务执行流程中有疏漏的点，也就是说这部分除了团队制定的checklist是必定检查项外（checklist往往是从技术层面来约束），根据当前的业务流程也需要check，这部分背景色是红色，也就是说这是业务的高压线，业务review不通过直接打回，待通过后才能往下继续；
    
2. 沟通学习
    
    起初准备叫技术review，后来一想，这里的代码已经通过了业务，也就是说满足了上线的基本要素，如果不进行CR，可能这些代码就已经上线了，但是这里，会被拿出来继续讨论，就代码的设计模式、算法复杂度、代码是否能够更加简化等各个层面进行讨论，也就是我想推动CR的一个原因，这部分是新人向老司机学习的最好机会，不用再苦于没有真实案例，只学到皮毛，摆在眼前就是真实的场景，新人自然不能放过。这部分背景色是绿色，正如我初衷，是开放高效的，也是CR的附加值；当然这里，需要给出具体的建议如伪代码或具体知识点，如果只是侃侃而谈，没有多大的用处。这部分讨论的不再是业务，也就是说不再是PD的非功能性需求，也是开发者探索的宝地；
    
3. 修复问题
    
    在沟通学习阶段，会产生问题，这类问题可以分为两种形式：
    
    1. 简易修改型代码；
    
    2. 需重构代码或重大调整。
    
    针对第一种简易修改型代码，可以立马去执行修改，优化代码质量。
    
    还有一种是重大重构如引入策略模式去除if-else，加入缓存等涉及到优化修改，我认为是可以延缓的，程序员是一个长时间加班的职业，在CR中如果涉及到这类修改无疑占用大量时间，挤压了开发时间，然后频繁加班，会让开发者疲于奔命，整个团队士气低落。另外，**在业务初期，软件系统的使用时保证业务快速落地**，也就是说在**业务快速发展时期，对代码也应该具备容忍度**，让业务快速落地拿到的结果更为丰盛。这个时候就可以申请滞后处理，也就相应的设计到重构的知识，也可以作为团队分享。
    
    而这部分时间投入理论上会随着重构次数增加，经验积累越来越丰富，出现的问题越来越少，这部分申请的修复人日也越来越少。
    

[https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d4d569a97974382ab4b54c24949f633~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d4d569a97974382ab4b54c24949f633~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

CR主要流程通过三个方面完成对代码质量的提升和问题的收口，关系如下图：

[https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbcdbe4323c246b097f50dc063b549bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbcdbe4323c246b097f50dc063b549bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

可以看出好的CR一定是**分阶段去review**，也就是说当聚焦到业务review时就不要去向speaker提出技术上的意见，可以先记录下来，待下一阶段在提出，一起商讨处理，**每个阶段聚焦到其对应的聚焦点上**，否则就出现你在说A，我在说B，起争执也达不到好的效果。

## 6.3 如何衡量CR的效果

CR是被认为一种工程师文化的代表，在IT圈也一直盛传着各种文化，如极客文化，hackthon等等，在这里**我也认为CR应该被视之为一种文化，而非一种极其机械的手段**。何为文化，就应该是**人内心心之向往，并外在委以寄托**。

- *CR同样应该被当做一种文化去培养，更像是一种软性的力量，去开发者联系在一起的感情系带。**如果在一开始，就想着去量化，开始是不是就是一个错误的开始呢？人性上一直存在的阴暗面，看到数字就会想着美化，管理者看到数字就被视为一种政绩，聚焦点就在这个冷冰冰的数字上，这种文化，如何落在开发者的信念上，如果一旦不能，CR就已经在走向成为负担的路上。

所以，我认为CR的推行，**一定是思想上”轻“，轻量化，不要因为数字而自嗨**，但是，**流程上”重“，这个重体现在对CR这项协同活动上各个角色完成相应的契约精神**。

如果非要以一个量化去评判CR落地的效果，我也认为不应该从CR中提炼出的各种数据，去看看项目交付后用户反馈有没有更好，去看看团队的精气神是不是有没有更好，去看看CR能侧向影响的层面，这些我认为是CR带来的最大的改变，就像文章开始所说，**问题，永远只是CR的副产品！**

退一万步说，从没有CR，到引入CR直至落地，拿到的不就是一种结果吗？只要开始就本是一种结果。

如果说最为理想的状态，CR会是彼此成长，简单高效，知识传播的一种践行的最佳途径。