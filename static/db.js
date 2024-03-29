const products = [
  {
    id: "00000000001",
    title: "すごく切れるハサミ",
    review: "4.5",
    reviewNum: 32,
    price: 10000,
    from: "ハサミ屋佐賀本店",
    img: "test1.png",
    explain:
      "「すごく切れるはさみ」は、まるで空気を断ち切るかのような途方もない切れ味を備えた驚異の存在です。その刃は鋭さの頂点に位置し、どんな厚っぺらい材料も難なく貫き、緻密な作業にも適応します。手にしっかりとフィットする強力なグリップは、何時間もの作業に耐え抜く頼もしさを誇ります。この創造物は、縫製からクラフトまで、どんなタスクにも究極の相棒となります。プロフェッショナルから一般の方まで、あらゆるユーザーが狂喜することでしょう。「すごく切れるはさみ」は、切ること自体が快感となる奇跡の道具です。あなたの作業を効率化し、結果を紡ぎ出すことでしょう。",
  },
  {
    id: "00000000002",
    title: "すぐに切れるハサミ",
    review: "4.0",
    reviewNum: 12,
    price: 15000,
    from: "ハサミのげん",
    img: "test2.png",
    explain:
      "「すぐに切れるハサミ」は、まさに光速で物を断ち切る、驚異的な切れ味を持った異次元の存在です。その鋭利な刃は、時間の流れを凝視するかのように、あらゆる材料を瞬時に貫き通します。一瞬のうちに、あなたの手の延長となり、作業効率を格段に向上させます。この神業級のハサミは、素早さと正確さを求める仕事に特に適しています。紙を切る、糸を切る、細かな手仕事をする――何であれ、あなたの欲求に即応し、満たしてくれるでしょう。ひとたび手にすれば、切ることが喜びとなり、感覚が躍動することでしょう。さあ、時間の軌道を超え、物質を超越する「すぐに切れるハサミ」のパワーを体感してください。",
  },
  {
    id: "00000000003",
    title: "いつか切れるハサミ",
    review: "5.0",
    reviewNum: 3,
    price: 1000,
    from: "ハサミ屋佐賀本店",
    img: "test3.png",
    explain:
      "「いつか切れるハサミ」、その名は神秘的な響きを持つこの逸品。時の流れと共に刃を研ぎ続ける魔法の力が込められています。切れ味はまさに究極の境地に達し、どんな物質も容易に切り裂くことができます。これはただのハサミではありません。それは時間の経過とともに切れ味が高まり、未来の力を具現化するツールなのです。いつか、あなたが必要とする瞬間に、その刃は最高の切れ味を発揮し、あらゆる困難を一刀両断します。手にする者には未知なる力が宿り、創造性が爆発することでしょう。経年変化を楽しむ一方で、その切れ味は永遠に進化し続けます。「いつか切れるハサミ」は、あなたに未来を切り開く鍵を握っています。さあ、その謎めいた刃を手にし、運命を切り拓く旅に出かけましょう。",
  },
  {
    id: "00000000004",
    title: "絶対に切れるハサミ",
    review: "1.0",
    reviewNum: 103,
    price: 32000,
    from: "もなか工房",
    img: "test4.png",
    explain:
      "「絶対に切れるハサミ」は、この宇宙において絶対的な切れ味を誇る神秘の存在です。その刃は万物を断ち切り、頑丈な材料や困難な作業にも容赦なく立ち向かいます。まるで宇宙の摂理を司る存在として、その切れ味は絶えず進化し続け、他のどのハサミとも一線を画します。この神聖なるハサミを手にすれば、限りない創造力と力強さを手に入れることができます。創造者たるあなたの手は、宇宙のエネルギーと一体化し、驚異的な結果をもたらすでしょう。困難を乗り越え、限界を超えるためのツールとして、「絶対に切れるハサミ」があなたを導くでしょう。その切れ味に心奪われ、宇宙の秘密を解き放ちなさい。",
  },
  {
    id: "00000000005",
    title: "ハサミ、とても貴重",
    review: "3.5",
    reviewNum: 3,
    price: 2000,
    from: "私貴金属",
    img: "test5.png",
    explain:
      "「とても貴重なハサミ」は、世界でただ一つの存在として輝く、宝石のような逸品です。その輝きはまばゆく、その価値は計り知れません。鋭利な刃は、宝石のような輝きを放ちながら、実用性と美しさを見事に融合させています。手にすれば、まるで宝石を抱くような感覚が広がります。創造力の源となるこのハサミは、あらゆる作業において優れたパフォーマンスを発揮し、贅沢な時間を紡ぎ出します。その煌めきは、使う者の心を豊かにし、芸術的な感覚を呼び覚ますことでしょう。世界中でただ一人の特別な存在であるあなたにふさわしい、「とても貴重なハサミ」を手に入れ、その輝きと共に世界を切り拓きましょう。",
  },
  {
    id: "00000000006",
    title: "風化したハサミ",
    review: "2.0",
    reviewNum: 50,
    price: 12000,
    from: "カプンコ",
    img: "test6.png",
    explain:
      "「風化したハサミ」は、時を経た痕跡と共に美しさを纏った、奇跡的な存在です。その刃は風と共に舞い、風化の痕が彫り込まれた魂を持ちます。その傷跡こそが、強さと経験の証であり、その切れ味は培われた知恵と力強さを象徴しています。風化したハサミは、あらゆる障害を乗り越える勇気と決断力を与えてくれます。それはまるで風が吹き抜け、過去の記憶を呼び覚ますような感覚です。使い手の手に馴染み、風化の美学が融合することで、創造性が開花し、独自の道を切り拓くことができます。風化したハサミの美しさは、一瞬の輝きではなく、永遠の物語となります。過去からの贈り物として、あなたの手に響く「風化したハサミ」の力を受け入れましょう。",
  },
  {
    id: "00000000007",
    title: "錆びたハサミ",
    review: "4.5",
    reviewNum: 230,
    price: 100,
    from: "キャプコン",
    img: "test7.png",
    explain:
      "「錆びたハサミ」は、時の流れと風雨によって彩られた、荒廃と美の融合を体現した逸品です。その錆びた刃は、過去の痕跡を語り部とし、その鈍くなった切れ味は、闘いと生命の歴史を物語っています。このハサミは、破壊と再生の象徴となり、困難に立ち向かう勇気をもたらします。その錆びた表面には、深い洞察と豊かな経験が刻み込まれており、使い手には新たなる視点と洞察力を与えてくれます。錆びたハサミは、美学的な魅力と儚さを同時に備えており、創造性を高める魔法の鍵となるでしょう。あなたの手に取れば、古代からの知恵と力強さが宿り、新たなる旅の扉が開かれることでしょう。「錆びたハサミ」の秘められた力に触れ、困難を乗り越える新たなる道を切り開きましょう。",
  },
];

export default products;
