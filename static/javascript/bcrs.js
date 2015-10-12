//Global variables so we can access them
//from anywhere -- easier than passing via functions at this point
//PANHANDLE COUNTY POLGYGONS
var myGlobal;

var gulf = [
  new google.maps.LatLng(30.2012466199278, -85.38779896838545),
  new google.maps.LatLng(29.922797675498, -85.3884003820266),
  new google.maps.LatLng(29.89732574091799, -85.44439744895944),
  new google.maps.LatLng(29.82289355392035, -85.41788892043675),
  new google.maps.LatLng(29.78423270187691, -85.41067210745352),
  new google.maps.LatLng(29.74772143746558, -85.39574035474271),
  new google.maps.LatLng(29.71199357978733, -85.38765611017071),
  new google.maps.LatLng(29.6798920367027, -85.37098249319348),
  new google.maps.LatLng(29.65671847312007, -85.35676311041155),
  new google.maps.LatLng(29.66849926190212, -85.34292618451845),
  new google.maps.LatLng(29.67792105384993, -85.31544892769435),
  new google.maps.LatLng(29.68064970239602, -85.28892242047516),
  new google.maps.LatLng(29.67350536199787, -85.24203474826393),
  new google.maps.LatLng(29.67786188340385, -85.23172358440931),
  new google.maps.LatLng(29.68741830251729, -85.22133964547761),
  new google.maps.LatLng(29.69254917543448, -85.21443415513667),
  new google.maps.LatLng(29.70146427460298, -85.21430922927445),
  new google.maps.LatLng(29.70950177466939, -85.20138273277415),
  new google.maps.LatLng(29.77308466697596, -85.10904941572041),
  new google.maps.LatLng(29.77375795354436, -85.10305667408463),
  new google.maps.LatLng(29.76915641144084, -85.09030325668263),
  new google.maps.LatLng(29.76750125208936, -85.07579636166192),
  new google.maps.LatLng(29.77335748300779, -85.06887073708049),
  new google.maps.LatLng(29.78220177769493, -85.06360953808367),
  new google.maps.LatLng(29.77760556365024, -85.05170830587312),
  new google.maps.LatLng(29.77971812063055, -85.0422709304782),
  new google.maps.LatLng(29.7892822580884, -85.0352854629211),
  new google.maps.LatLng(29.80328687757398, -85.02737537822134),
  new google.maps.LatLng(29.81282761511755, -85.01867538013894),
  new google.maps.LatLng(29.82399809681322, -85.02192581776171),
  new google.maps.LatLng(29.83373552236592, -85.02947585690863),
  new google.maps.LatLng(29.85237182085685, -85.03688939253676),
  new google.maps.LatLng(29.8709743667875, -85.04173677454006),
  new google.maps.LatLng(29.90003674328005, -85.05326915918674),
  new google.maps.LatLng(29.90957628954751, -85.04456259566564),
  new google.maps.LatLng(29.92584984630175, -85.04088472186081),
  new google.maps.LatLng(29.93090980477515, -85.02967478660166),
  new google.maps.LatLng(29.94487845224737, -85.01917689616757),
  new google.maps.LatLng(29.95673405841409, -85.01813089080736),
  new google.maps.LatLng(29.97686861091327, -85.0272315873259),
  new google.maps.LatLng(29.98803345576951, -85.03047983398474),
  new google.maps.LatLng(29.98818208961903, -85.04332848548675),
  new google.maps.LatLng(29.99343283996079, -85.04838548424257),
  new google.maps.LatLng(30.00093785064265, -85.05597743841561),
  new google.maps.LatLng(30.00327016845677, -85.06536462712749),
  new google.maps.LatLng(30.00562122913275, -85.07646471523881),
  new google.maps.LatLng(30.01691967992768, -85.09171031787011),
  new google.maps.LatLng(30.02302492688676, -85.10703748777965),
  new google.maps.LatLng(30.03363579716448, -85.12743871428694),
  new google.maps.LatLng(30.0522191416861, -85.13058857173391),
  new google.maps.LatLng(30.06409030930965, -85.1304112778072),
  new google.maps.LatLng(30.07151991636437, -85.13115735821675),
  new google.maps.LatLng(30.08419175862968, -85.1361116870409),
  new google.maps.LatLng(30.09103846596152, -85.15144232719258),
  new google.maps.LatLng(30.09467566979396, -85.14452968703709),
  new google.maps.LatLng(30.10658996518009, -85.1477837027816),
  new google.maps.LatLng(30.11097966278476, -85.14171561824854),
  new google.maps.LatLng(30.11311423565616, -85.13310729253081),
  new google.maps.LatLng(30.12128193951518, -85.13298491654035),
  new google.maps.LatLng(30.12285982130152, -85.14153917893576),
  new google.maps.LatLng(30.13617212383362, -85.1361934462157),
  new google.maps.LatLng(30.14653440792807, -85.13260588118311),
  new google.maps.LatLng(30.15995414799737, -85.13669555224237),
  new google.maps.LatLng(30.17554225275115, -85.13474479378183),
  new google.maps.LatLng(30.18290169183283, -85.12776498473622),
  new google.maps.LatLng(30.196880329996, -85.11381080254184),
  new google.maps.LatLng(30.20063571103455, -85.11718867140242),
  new google.maps.LatLng(30.2012466199278, -85.38779896838545)
];


var franklin = [
  new google.maps.LatLng(29.97974227104401, -85.0195215176728),
  new google.maps.LatLng(29.97481849190061, -85.02679726602491),
  new google.maps.LatLng(29.97021098781261, -85.02265821474728),
  new google.maps.LatLng(29.96197362761073, -85.01962576240696),
  new google.maps.LatLng(29.94558039676155, -85.01987094719709),
  new google.maps.LatLng(29.93294933859774, -85.02952176450654),
  new google.maps.LatLng(29.92665332733589, -85.03592323429103),
  new google.maps.LatLng(29.91670238369252, -85.04132731095386),
  new google.maps.LatLng(29.9076365601733, -85.04461546846171),
  new google.maps.LatLng(29.89772446597334, -85.0531713036598),
  new google.maps.LatLng(29.8894425078322, -85.04593754643771),
  new google.maps.LatLng(29.86753413481564, -85.04101317536441),
  new google.maps.LatLng(29.84559142061086, -85.03294419129637),
  new google.maps.LatLng(29.82636886416031, -85.02379047626627),
  new google.maps.LatLng(29.81355491013725, -85.01769169090557),
  new google.maps.LatLng(29.80723625901553, -85.02198892328454),
  new google.maps.LatLng(29.79549561141266, -85.02951929261116),
  new google.maps.LatLng(29.78108598973244, -85.04233837286132),
  new google.maps.LatLng(29.77844207323878, -85.04972651318803),
  new google.maps.LatLng(29.77674399574919, -85.06024952503312),
  new google.maps.LatLng(29.77049486466443, -85.07084326796353),
  new google.maps.LatLng(29.76793217198932, -85.08558107317874),
  new google.maps.LatLng(29.77086365775229, -85.10338929935681),
  new google.maps.LatLng(29.7628587449682, -85.12031519071974),
  new google.maps.LatLng(29.74665706786676, -85.13736483359804),
  new google.maps.LatLng(29.73866601034161, -85.1563962631932),
  new google.maps.LatLng(29.72245285251506, -85.17345012349487),
  new google.maps.LatLng(29.70902904892268, -85.19677331964988),
  new google.maps.LatLng(29.69918788857806, -85.21479256891976),
  new google.maps.LatLng(29.69190018378774, -85.21489895154087),
  new google.maps.LatLng(29.67925790898064, -85.22665231518243),
  new google.maps.LatLng(29.67367952485245, -85.21516696249138),
  new google.maps.LatLng(29.66433268792663, -85.19112986345188),
  new google.maps.LatLng(29.64579934926177, -85.15989734802787),
  new google.maps.LatLng(29.63008985470045, -85.1380942573801),
  new google.maps.LatLng(29.62981925409575, -85.11186340079928),
  new google.maps.LatLng(29.62240037077507, -85.09939271094845),
  new google.maps.LatLng(29.60944795363889, -85.08072333101524),
  new google.maps.LatLng(29.58540104852914, -85.04757158046382),
  new google.maps.LatLng(29.59239841269946, -85.02125953671215),
  new google.maps.LatLng(29.60995819940241, -84.96440133549797),
  new google.maps.LatLng(29.63479675475798, -84.91057288838476),
  new google.maps.LatLng(29.66399498554074, -84.84514850230472),
  new google.maps.LatLng(29.68775782915772, -84.78503936154702),
  new google.maps.LatLng(29.71543397581049, -84.74682970108675),
  new google.maps.LatLng(29.76288069327282, -84.69250195796796),
  new google.maps.LatLng(29.77623621574068, -84.67232807323637),
  new google.maps.LatLng(29.78209752614355, -84.63760944308878),
  new google.maps.LatLng(29.79624791694727, -84.61005555409275),
  new google.maps.LatLng(29.81207277155075, -84.57300405063155),
  new google.maps.LatLng(29.83208961436019, -84.57259395413162),
  new google.maps.LatLng(29.88195843975163, -84.49903629272903),
  new google.maps.LatLng(29.89895293463156, -84.47867794026926),
  new google.maps.LatLng(29.90845421526495, -84.44478449306132),
  new google.maps.LatLng(29.89796062656672, -84.41448286247844),
  new google.maps.LatLng(29.8935686193747, -84.36716341310344),
  new google.maps.LatLng(29.89949298352609, -84.33854730030397),
  new google.maps.LatLng(29.93035157664806, -84.32935994101706),
  new google.maps.LatLng(29.95314748317093, -84.32880206826633),
  new google.maps.LatLng(29.98222944763784, -84.44098675842858),
  new google.maps.LatLng(29.97680747811721, -84.44427435805363),
  new google.maps.LatLng(29.97511092234637, -84.4527438370539),
  new google.maps.LatLng(29.9916131516591, -84.4586864545509),
  new google.maps.LatLng(30.00270950655467, -84.46896953075489),
  new google.maps.LatLng(29.99101407221638, -84.47977333229041),
  new google.maps.LatLng(29.98579425650529, -84.49674396634022),
  new google.maps.LatLng(29.98795542281313, -84.50928250243662),
  new google.maps.LatLng(29.98022883735634, -84.51169973913719),
  new google.maps.LatLng(29.98167141783777, -84.52212498289629),
  new google.maps.LatLng(29.99263079277551, -84.51963611879199),
  new google.maps.LatLng(30.00104818811342, -84.52019207464831),
  new google.maps.LatLng(30.00828931415651, -84.52899378178236),
  new google.maps.LatLng(30.00328405830551, -84.54105921213603),
  new google.maps.LatLng(30.00975069135109, -84.55080268548377),
  new google.maps.LatLng(30.01304023208751, -85.00355661806768),
  new google.maps.LatLng(30.00542551881657, -85.00698551199182),
  new google.maps.LatLng(29.99973934298402, -85.01149012576282),
  new google.maps.LatLng(29.98926883619643, -85.01606551271169),
  new google.maps.LatLng(29.97974227104401, -85.0195215176728)
];


var walton = [
  new google.maps.LatLng(30.99149815862846, -86.38566394623301),
  new google.maps.LatLng(30.37580228277409, -86.39831323965467),
  new google.maps.LatLng(30.37476358645638, -86.39115164340373),
  new google.maps.LatLng(30.36853175521049, -86.3565455341661),
  new google.maps.LatLng(30.35289499100712, -86.27184696269292),
  new google.maps.LatLng(30.3080340015236, -86.12639848746382),
  new google.maps.LatLng(30.2639742444958, -85.9964014897871),
  new google.maps.LatLng(30.37650561698662, -85.98991985202851),
  new google.maps.LatLng(30.38572764442632, -85.98935298974989),
  new google.maps.LatLng(30.40335037151717, -85.9911291477908),
  new google.maps.LatLng(30.40571360156095, -85.98462190230391),
  new google.maps.LatLng(30.41930798329316, -85.98270195689129),
  new google.maps.LatLng(30.42648795573819, -85.9789547912345),
  new google.maps.LatLng(30.43204525916994, -85.97150115130418),
  new google.maps.LatLng(30.43836865401325, -85.95847060382144),
  new google.maps.LatLng(30.44307886942215, -85.94358651899222),
  new google.maps.LatLng(30.44219780707811, -85.93058499688154),
  new google.maps.LatLng(30.44053238720382, -85.92037250920669),
  new google.maps.LatLng(30.44201779350909, -85.90270530060492),
  new google.maps.LatLng(30.45316603704852, -85.89427770228633),
  new google.maps.LatLng(30.46595624584504, -85.89234710809954),
  new google.maps.LatLng(30.46509456156637, -85.88305186148375),
  new google.maps.LatLng(30.4722397628458, -85.87463925452842),
  new google.maps.LatLng(30.49054767283678, -85.86057365910827),
  new google.maps.LatLng(30.49937845256421, -85.86517339101039),
  new google.maps.LatLng(30.51224860248737, -85.87626150947662),
  new google.maps.LatLng(30.52429690524798, -85.88456128402925),
  new google.maps.LatLng(30.53943703100221, -85.87609062593678),
  new google.maps.LatLng(30.55465634124552, -85.88064565848256),
  new google.maps.LatLng(30.5626896770237, -85.88710795281853),
  new google.maps.LatLng(30.58030765435422, -85.89257552464144),
  new google.maps.LatLng(30.58756975917332, -85.90462516759526),
  new google.maps.LatLng(30.60757426188957, -85.90914402701171),
  new google.maps.LatLng(30.62675752056626, -85.90994335036628),
  new google.maps.LatLng(30.63793966551738, -85.9089344154977),
  new google.maps.LatLng(30.6450824510305, -85.89957340179393),
  new google.maps.LatLng(30.65538255789337, -85.88273360711158),
  new google.maps.LatLng(30.66571307963997, -85.87147460334671),
  new google.maps.LatLng(30.67528492684907, -85.86767238499907),
  new google.maps.LatLng(30.69362629829362, -85.85913594422121),
  new google.maps.LatLng(30.70497026882881, -85.85242590292496),
  new google.maps.LatLng(30.7049024650257, -86.03521547512331),
  new google.maps.LatLng(30.99149966599977, -86.03647957589192),
  new google.maps.LatLng(30.99149815862846, -86.38566394623301)
];


var okaloosa = [
  new google.maps.LatLng(30.99423888957147, -86.78449525109392),
  new google.maps.LatLng(30.38474866500915, -86.80317421765548),
  new google.maps.LatLng(30.39239145785289, -86.73971472367484),
  new google.maps.LatLng(30.39598278694686, -86.64186363319736),
  new google.maps.LatLng(30.38820036850182, -86.54563775333634),
  new google.maps.LatLng(30.38079234936362, -86.50182432123491),
  new google.maps.LatLng(30.3767606665633, -86.39827108473781),
  new google.maps.LatLng(30.99373471685745, -86.38837251272111),
  new google.maps.LatLng(30.99423888957147, -86.78449525109392)
];

var escambia = [
  new google.maps.LatLng(30.99493536512025, -87.59348453090902),
  new google.maps.LatLng(30.86688360911829, -87.63235422902748),
  new google.maps.LatLng(30.84391791995635, -87.62270069992574),
  new google.maps.LatLng(30.82154320309783, -87.59875671782596),
  new google.maps.LatLng(30.80700515111795, -87.57260178135815),
  new google.maps.LatLng(30.76699747544412, -87.54102406547438),
  new google.maps.LatLng(30.7439225192575, -87.5243213266924),
  new google.maps.LatLng(30.72049602510396, -87.49034585378533),
  new google.maps.LatLng(30.69519764672701, -87.45035797908403),
  new google.maps.LatLng(30.67330372949723, -87.40625148353077),
  new google.maps.LatLng(30.63627214105193, -87.39003938514476),
  new google.maps.LatLng(30.60248070594499, -87.40319366715569),
  new google.maps.LatLng(30.60073454202791, -87.40324372065486),
  new google.maps.LatLng(30.56020166178631, -87.42876958198573),
  new google.maps.LatLng(30.53354195445764, -87.44983388212987),
  new google.maps.LatLng(30.53094197947738, -87.45092319337024),
  new google.maps.LatLng(30.50554431498006, -87.44860423375873),
  new google.maps.LatLng(30.48507496200228, -87.43092706918772),
  new google.maps.LatLng(30.45820982947965, -87.40025998252145),
  new google.maps.LatLng(30.4525226459271, -87.37913028190383),
  new google.maps.LatLng(30.43305691392609, -87.36854807196912),
  new google.maps.LatLng(30.42155218842971, -87.40437156940445),
  new google.maps.LatLng(30.41065778399469, -87.42801283518266),
  new google.maps.LatLng(30.39167551446404, -87.44174985222212),
  new google.maps.LatLng(30.37771326706065, -87.44418530898696),
  new google.maps.LatLng(30.36289181529861, -87.44766051164206),
  new google.maps.LatLng(30.34197466100491, -87.45334295160238),
  new google.maps.LatLng(30.33741112110821, -87.48897559033257),
  new google.maps.LatLng(30.3193376867141, -87.50675075493243),
  new google.maps.LatLng(30.30677473537594, -87.49190110602946),
  new google.maps.LatLng(30.30335791765243, -87.45143507201034),
  new google.maps.LatLng(30.2941283917728, -87.47300165436809),
  new google.maps.LatLng(30.28782747677658, -87.5107182827936),
  new google.maps.LatLng(30.27737549990189, -87.51508415315131),
  new google.maps.LatLng(30.30207482120997, -87.38761282049428),
  new google.maps.LatLng(30.31394649008289, -87.32646621161906),
  new google.maps.LatLng(30.32211773068681, -87.2988697814903),
  new google.maps.LatLng(30.31396839650444, -87.28695644664678),
  new google.maps.LatLng(30.31297988156279, -87.2424145806405),
  new google.maps.LatLng(30.36901609873944, -86.91822941117779),
  new google.maps.LatLng(30.37594138171999, -86.91496368905621),
  new google.maps.LatLng(30.38573312334236, -86.92075218414685),
  new google.maps.LatLng(30.38605227779554, -86.9329337484663),
  new google.maps.LatLng(30.37654680559715, -86.97182192246041),
  new google.maps.LatLng(30.37057753450181, -87.01260492001038),
  new google.maps.LatLng(30.36781346929209, -87.04211026319217),
  new google.maps.LatLng(30.3597620186509, -87.07075389411239),
  new google.maps.LatLng(30.34994942815105, -87.09944171288792),
  new google.maps.LatLng(30.34805446515957, -87.12990714799796),
  new google.maps.LatLng(30.34323469116635, -87.14829500337598),
  new google.maps.LatLng(30.33500261713953, -87.17083648700923),
  new google.maps.LatLng(30.33895285308529, -87.1899678743721),
  new google.maps.LatLng(30.34658491918992, -87.21709273007718),
  new google.maps.LatLng(30.35570620629221, -87.23302855088814),
  new google.maps.LatLng(30.38025467234639, -87.23431742244738),
  new google.maps.LatLng(30.38603483815754, -87.218944773839),
  new google.maps.LatLng(30.39396949221022, -87.1832383742677),
  new google.maps.LatLng(30.41072930364494, -87.15131010840987),
  new google.maps.LatLng(30.4182412359702, -87.1358753377294),
  new google.maps.LatLng(30.43218234134727, -87.13342077504986),
  new google.maps.LatLng(30.45571078859179, -87.12965660029698),
  new google.maps.LatLng(30.47840641356117, -87.12794360580978),
  new google.maps.LatLng(30.49665699227656, -87.1233230628828),
  new google.maps.LatLng(30.51797701104439, -87.13787903810935),
  new google.maps.LatLng(30.53766106303288, -87.15755968421242),
  new google.maps.LatLng(30.54702311160069, -87.18466090078604),
  new google.maps.LatLng(30.56170715844533, -87.21565951972296),
  new google.maps.LatLng(30.5749850060733, -87.22337250637983),
  new google.maps.LatLng(30.60169516386096, -87.24590189066656),
  new google.maps.LatLng(30.61331328653347, -87.257730163701),
  new google.maps.LatLng(30.64307948996453, -87.26089729837948),
  new google.maps.LatLng(30.68687855887437, -87.26669333492232),
  new google.maps.LatLng(30.71604371695641, -87.28207670206989),
  new google.maps.LatLng(30.72264580602611, -87.30423478144559),
  new google.maps.LatLng(30.75589055354295, -87.30630569495474),
  new google.maps.LatLng(30.79075656190859, -87.30223044029003),
  new google.maps.LatLng(30.81505970688369, -87.29439463202468),
  new google.maps.LatLng(30.84416503066343, -87.30575018946577),
  new google.maps.LatLng(30.85989873628355, -87.30528951514506),
  new google.maps.LatLng(30.87615088806434, -87.28852143958167),
  new google.maps.LatLng(30.89359607276893, -87.28596960285296),
  new google.maps.LatLng(30.902410664957, -87.28876532335053),
  new google.maps.LatLng(30.91905623354299, -87.28929361016117),
  new google.maps.LatLng(30.92762667735803, -87.28088835571148),
  new google.maps.LatLng(30.93581337116493, -87.25516564124024),
  new google.maps.LatLng(30.95549507318886, -87.23418371549005),
  new google.maps.LatLng(30.96324004879742, -87.22783023266175),
  new google.maps.LatLng(30.97673088297109, -87.20395967063386),
  new google.maps.LatLng(30.98494443569794, -87.17922160745356),
  new google.maps.LatLng(30.99359340017373, -87.17384827298814),
  new google.maps.LatLng(30.99808995219826, -87.17880896819777),
  new google.maps.LatLng(30.99493536512025, -87.59348453090902)
];

var santarosa = [
  new google.maps.LatLng(30.99561535071051, -86.78589501487812),
  new google.maps.LatLng(30.99862172628631, -87.16742728644563),
  new google.maps.LatLng(30.98757262055367, -87.17975995382815),
  new google.maps.LatLng(30.97265855108729, -87.20300371249681),
  new google.maps.LatLng(30.96314498458687, -87.23688384511652),
  new google.maps.LatLng(30.94386182733568, -87.24944198320004),
  new google.maps.LatLng(30.9299501420553, -87.27143969456617),
  new google.maps.LatLng(30.92107344463423, -87.28849122444387),
  new google.maps.LatLng(30.90357995125502, -87.28898821705026),
  new google.maps.LatLng(30.88823031480763, -87.29302355667534),
  new google.maps.LatLng(30.87101701571419, -87.30550592420377),
  new google.maps.LatLng(30.85564526641436, -87.3083406960491),
  new google.maps.LatLng(30.83489233532017, -87.30054129337029),
  new google.maps.LatLng(30.79994526093563, -87.30154507152471),
  new google.maps.LatLng(30.77952698322466, -87.30812281910949),
  new google.maps.LatLng(30.76822448890291, -87.30844898412215),
  new google.maps.LatLng(30.74973135169953, -87.30898401916335),
  new google.maps.LatLng(30.73118723398242, -87.30712818115013),
  new google.maps.LatLng(30.72062382033255, -87.29427137613006),
  new google.maps.LatLng(30.71508949289601, -87.27648635415613),
  new google.maps.LatLng(30.70065823181245, -87.27452069308716),
  new google.maps.LatLng(30.68204045852211, -87.269093628356),
  new google.maps.LatLng(30.64994231369534, -87.25809771254778),
  new google.maps.LatLng(30.61400307701208, -87.25917913781376),
  new google.maps.LatLng(30.59828317469518, -87.24531859325718),
  new google.maps.LatLng(30.57532121773256, -87.22929800640986),
  new google.maps.LatLng(30.55314366896877, -87.20252118568064),
  new google.maps.LatLng(30.53693237869476, -87.16722307561491),
  new google.maps.LatLng(30.518984847015, -87.14631093549039),
  new google.maps.LatLng(30.49686868216013, -87.12315422573552),
  new google.maps.LatLng(30.4601324234049, -87.13504750161755),
  new google.maps.LatLng(30.41693912884495, -87.13522191216727),
  new google.maps.LatLng(30.39523501211153, -87.17643538615502),
  new google.maps.LatLng(30.37805773351363, -87.23777928275854),
  new google.maps.LatLng(30.34594804032498, -87.2292450800756),
  new google.maps.LatLng(30.33925184745537, -87.20561368098977),
  new google.maps.LatLng(30.33281275911329, -87.19389762671521),
  new google.maps.LatLng(30.33848657107722, -87.17107495308152),
  new google.maps.LatLng(30.3452091760317, -87.14941254231597),
  new google.maps.LatLng(30.34298875602711, -87.14233360945708),
  new google.maps.LatLng(30.35994080847533, -87.07388100262375),
  new google.maps.LatLng(30.37386187328012, -87.01028898942809),
  new google.maps.LatLng(30.38405014734456, -86.92297079056959),
  new google.maps.LatLng(30.36635337220334, -86.91520941229514),
  new google.maps.LatLng(30.38186164655351, -86.79904573582566),
  new google.maps.LatLng(30.99561535071051, -86.78589501487812)
];


var bay = [
  new google.maps.LatLng(30.2694869289039, -85.99436457883198),
  new google.maps.LatLng(30.20773388436114, -85.86510658511438),
  new google.maps.LatLng(30.16121793115805, -85.78514923377345),
  new google.maps.LatLng(30.1254479141613, -85.73466232448975),
  new google.maps.LatLng(30.0895181882586, -85.68555164698437),
  new google.maps.LatLng(30.06318347892681, -85.62461181988905),
  new google.maps.LatLng(30.03637155261603, -85.58266769773734),
  new google.maps.LatLng(29.99943214699612, -85.54082604310759),
  new google.maps.LatLng(29.96756328216797, -85.50621224219191),
  new google.maps.LatLng(29.95584219426367, -85.46848445351913),
  new google.maps.LatLng(29.92655998714364, -85.38836439749188),
  new google.maps.LatLng(30.56598106608626, -85.3820323604363),
  new google.maps.LatLng(30.56568464259106, -85.4832745797726),
  new google.maps.LatLng(30.43694782467329, -85.48958881388897),
  new google.maps.LatLng(30.44117483394799, -85.85137187352201),
  new google.maps.LatLng(30.43889611469527, -85.85607114322417),
  new google.maps.LatLng(30.43257639621809, -85.86012932081287),
  new google.maps.LatLng(30.42568015599639, -85.86419118833251),
  new google.maps.LatLng(30.4159360401922, -85.87429316583437),
  new google.maps.LatLng(30.40852452876866, -85.88906191234668),
  new google.maps.LatLng(30.40915426394593, -85.89842525262571),
  new google.maps.LatLng(30.40864513193058, -85.91047440711473),
  new google.maps.LatLng(30.4150411699298, -85.91980477970451),
  new google.maps.LatLng(30.41392099429887, -85.92583684561443),
  new google.maps.LatLng(30.41166527471052, -85.93522405653231),
  new google.maps.LatLng(30.4111501109676, -85.94661097244662),
  new google.maps.LatLng(30.41064126905934, -85.9593397673649),
  new google.maps.LatLng(30.40435202881382, -85.97009424763645),
  new google.maps.LatLng(30.39516004148622, -85.97751606139104),
  new google.maps.LatLng(30.38946202248365, -85.99161903951003),
  new google.maps.LatLng(30.37850443387553, -85.99235065591752),
  new google.maps.LatLng(30.3750334292774, -85.99036037295525),
  new google.maps.LatLng(30.2694869289039, -85.99436457883198)
];

//SOUTHWEST FL POLYGONS
 var collier = [
  new google.maps.LatLng(26.32930976515922, -81.84168725095306),
  new google.maps.LatLng(26.32797935101717, -81.818278195701),
  new google.maps.LatLng(26.31566193475177, -81.81556485642437),
  new google.maps.LatLng(26.31615616240083, -81.65745197034029),
  new google.maps.LatLng(26.42244549308792, -81.66011155953436),
  new google.maps.LatLng(26.42259730745133, -81.56213301483402),
  new google.maps.LatLng(26.51309065362788, -81.56245149253294),
  new google.maps.LatLng(26.51422519418557, -81.27142457216971),
  new google.maps.LatLng(26.25377944579187, -81.26928021943458),
  new google.maps.LatLng(26.25769482239421, -80.87965459648542),
  new google.maps.LatLng(25.80489539652041, -80.87223260729945),
  new google.maps.LatLng(25.80426594037235, -81.33929555466366),
  new google.maps.LatLng(25.81867941216469, -81.34649129575814),
  new google.maps.LatLng(25.82335124647443, -81.3566642087803),
  new google.maps.LatLng(25.83737999910909, -81.37860623968561),
  new google.maps.LatLng(25.84970825222215, -81.38667934686048),
  new google.maps.LatLng(25.85228279701192, -81.40709249504367),
  new google.maps.LatLng(25.86216531039706, -81.4179126453824),
  new google.maps.LatLng(25.90638362640189, -81.72193140211984),
  new google.maps.LatLng(25.95373190659133, -81.74948624680225),
  new google.maps.LatLng(26.08633598940589, -81.79833773714528),
  new google.maps.LatLng(26.32930976515922, -81.84168725095306)
];

 var lee = [
  new google.maps.LatLng(26.77000946640218, -82.05906147497082),
  new google.maps.LatLng(26.76839776194297, -81.56511458824602),
  new google.maps.LatLng(26.42093876536922, -81.56054668857382),
  new google.maps.LatLng(26.41878995064597, -81.6583529150298),
  new google.maps.LatLng(26.31397227611855, -81.65650136665035),
  new google.maps.LatLng(26.31240128434061, -81.81828713567508),
  new google.maps.LatLng(26.33021741500527, -81.81977912890812),
  new google.maps.LatLng(26.32806433870269, -81.8420273681201),
  new google.maps.LatLng(26.39629739759458, -81.88424452235348),
  new google.maps.LatLng(26.45896921433974, -81.96996958664197),
  new google.maps.LatLng(26.45936487626758, -81.98614986124272),
  new google.maps.LatLng(26.44865211135613, -82.00587935627888),
  new google.maps.LatLng(26.41542056568191, -82.07678120552065),
  new google.maps.LatLng(26.42693006955016, -82.12536752153775),
  new google.maps.LatLng(26.44701689086488, -82.15330990510684),
  new google.maps.LatLng(26.47787694378065, -82.18589122280405),
  new google.maps.LatLng(26.52359066963068, -82.19829351306836),
  new google.maps.LatLng(26.56272846402213, -82.20678753279414),
  new google.maps.LatLng(26.57135155939868, -82.2104936286747),
  new google.maps.LatLng(26.58548189173855, -82.22987050269367),
  new google.maps.LatLng(26.59944531534161, -82.23532236213801),
  new google.maps.LatLng(26.611782816455, -82.23397694647979),
  new google.maps.LatLng(26.62760313452782, -82.23690243322149),
  new google.maps.LatLng(26.66671200795659, -82.25708644155165),
  new google.maps.LatLng(26.68469152738295, -82.26095662540676),
  new google.maps.LatLng(26.70257210626991, -82.26367509756052),
  new google.maps.LatLng(26.77547128650793, -82.26629346152356),
  new google.maps.LatLng(26.77000946640218, -82.05906147497082)
];

 var sarasota = [
  new google.maps.LatLng(27.3877319461903, -82.64304737358744),
  new google.maps.LatLng(27.38537283513888, -82.25285808119452),
  new google.maps.LatLng(27.21049432965378, -82.25099937775799),
  new google.maps.LatLng(27.20686266098425, -82.05883988525157),
  new google.maps.LatLng(27.03085799777693, -82.05719012141707),
  new google.maps.LatLng(27.03048753864334, -82.25481973707898),
  new google.maps.LatLng(26.94567666716201, -82.25350754315809),
  new google.maps.LatLng(26.94504835692455, -82.37564303841857),
  new google.maps.LatLng(27.06113958861454, -82.44980836410201),
  new google.maps.LatLng(27.14265457250436, -82.47971988670088),
  new google.maps.LatLng(27.19358369222563, -82.51084096237368),
  new google.maps.LatLng(27.24709534114419, -82.53963162156141),
  new google.maps.LatLng(27.25818076125113, -82.54995398598567),
  new google.maps.LatLng(27.26895350683919, -82.56763107955629),
  new google.maps.LatLng(27.28035159450367, -82.57060697885756),
  new google.maps.LatLng(27.29307039294839, -82.56716887415192),
  new google.maps.LatLng(27.31524592840452, -82.58783997188498),
  new google.maps.LatLng(27.32682089491469, -82.59289655574627),
  new google.maps.LatLng(27.3877319461903, -82.64304737358744)
];

 var manatee = [
  new google.maps.LatLng(27.64380261990674, -82.56363227392562),
  new google.maps.LatLng(27.64523738012516, -82.05385740524129),
  new google.maps.LatLng(27.20737609507086, -82.05697037607985),
  new google.maps.LatLng(27.20767862406885, -82.25203698073077),
  new google.maps.LatLng(27.38581480218745, -82.25261369286856),
  new google.maps.LatLng(27.38816387644683, -82.56366276433505),
  new google.maps.LatLng(27.39001703834906, -82.64385809652345),
  new google.maps.LatLng(27.4346909633001, -82.68975393508538),
  new google.maps.LatLng(27.4901562875061, -82.71106103743045),
  new google.maps.LatLng(27.50535167209867, -82.72033019515484),
  new google.maps.LatLng(27.52171561615408, -82.73401915451687),
  new google.maps.LatLng(27.53865492425154, -82.74493980431116),
  new google.maps.LatLng(27.52663965368053, -82.70632577355322),
  new google.maps.LatLng(27.51509470153206, -82.68309375899477),
  new google.maps.LatLng(27.5227930468208, -82.66961581631858),
  new google.maps.LatLng(27.53212617684115, -82.64691563759314),
  new google.maps.LatLng(27.55555973104941, -82.62996768683395),
  new google.maps.LatLng(27.5712697291909, -82.61654429384352),
  new google.maps.LatLng(27.58561417969522, -82.6059778061406),
  new google.maps.LatLng(27.59156033467207, -82.5908671465231),
  new google.maps.LatLng(27.60870748139592, -82.57548132136054),
  new google.maps.LatLng(27.62025356352302, -82.56973822181541),
  new google.maps.LatLng(27.64380261990674, -82.56363227392562)
];

var charlotte = [
  new google.maps.LatLng(26.94346682295137, -82.37384595469673),
  new google.maps.LatLng(26.94358916300256, -82.37382688507196),
  new google.maps.LatLng(26.94274611547859, -82.25454470491083),
  new google.maps.LatLng(27.0286773364652, -82.25483567687873),
  new google.maps.LatLng(27.03267279063942, -82.25516231342475),
  new google.maps.LatLng(27.03121074348086, -81.99471036401398),
  new google.maps.LatLng(27.03532349629596, -81.98674743142725),
  new google.maps.LatLng(27.03298977223303, -81.56148591341977),
  new google.maps.LatLng(26.76738239144529, -81.56421344061783),
  new google.maps.LatLng(26.7663559844477, -82.27031954455219),
  new google.maps.LatLng(26.93395613537081, -82.37234909582725),
  new google.maps.LatLng(26.9431001671737, -82.37378563209727),
  new google.maps.LatLng(26.94346682295137, -82.37384595469673)
];

var pinellas = [
  new google.maps.LatLng(28.1743535409484, -82.6514512321552),
  new google.maps.LatLng(28.1722796282516, -82.78967723317832),
  new google.maps.LatLng(28.17442790330703, -82.65234506816707),
  new google.maps.LatLng(28.14320567345572, -82.65023734070552),
  new google.maps.LatLng(28.03963207431201, -82.64769489973827),
  new google.maps.LatLng(28.01934847595109, -82.64871897611508),
  new google.maps.LatLng(28.01755847341568, -82.65394228590591),
  new google.maps.LatLng(28.00381261744919, -82.65791418871496),
  new google.maps.LatLng(28.00128798490492, -82.6632141181057),
  new google.maps.LatLng(28.01179189275857, -82.6671855583203),
  new google.maps.LatLng(28.01985843681215, -82.66535408088625),
  new google.maps.LatLng(28.02645149699512, -82.66661692618392),
  new google.maps.LatLng(28.0322541637856, -82.67923077335341),
  new google.maps.LatLng(28.03051158075181, -82.6843133539961),
  new google.maps.LatLng(28.0409244107751, -82.70036562884067),
  new google.maps.LatLng(28.03808151720913, -82.70262378966451),
  new google.maps.LatLng(28.00655265553164, -82.67704335684869),
  new google.maps.LatLng(27.97080966116797, -82.69989207057313),
  new google.maps.LatLng(27.96971270892903, -82.69707125592173),
  new google.maps.LatLng(27.97300718578001, -82.68986974198509),
  new google.maps.LatLng(27.97031684250344, -82.6886862536615),
  new google.maps.LatLng(27.95943140887861, -82.69815945430712),
  new google.maps.LatLng(27.95670506887305, -82.7175337286636),
  new google.maps.LatLng(27.93732356608973, -82.72887377820373),
  new google.maps.LatLng(27.93597785997065, -82.71776202218916),
  new google.maps.LatLng(27.92713347313879, -82.70953477121201),
  new google.maps.LatLng(27.92420550268264, -82.70343622913835),
  new google.maps.LatLng(27.9193488147502, -82.69845707590179),
  new google.maps.LatLng(27.9240829638317, -82.69704396806768),
  new google.maps.LatLng(27.92188160893902, -82.68995572867438),
  new google.maps.LatLng(27.91460935247991, -82.68020042116885),
  new google.maps.LatLng(27.91264674235684, -82.66622722101445),
  new google.maps.LatLng(27.90745202709755, -82.65717103004965),
  new google.maps.LatLng(27.90875464204002, -82.65337432123631),
  new google.maps.LatLng(27.89836345292294, -82.6499014883381),
  new google.maps.LatLng(27.89606011538183, -82.64648709324568),
  new google.maps.LatLng(27.89001304422493, -82.64667063283594),
  new google.maps.LatLng(27.88972557029993, -82.63344016335584),
  new google.maps.LatLng(27.87618994481195, -82.61155823426314),
  new google.maps.LatLng(27.88119208218275, -82.58907910632927),
  new google.maps.LatLng(27.87688416715603, -82.58587995257832),
  new google.maps.LatLng(27.82949364426034, -82.5895523881599),
  new google.maps.LatLng(27.79248817747678, -82.61130768684031),
  new google.maps.LatLng(27.79204080421386, -82.62049423709564),
  new google.maps.LatLng(27.77482021214138, -82.62734689910296),
  new google.maps.LatLng(27.76422285429235, -82.6216177035887),
  new google.maps.LatLng(27.75957151811831, -82.62044754214293),
  new google.maps.LatLng(27.75935808897118, -82.63078609184326),
  new google.maps.LatLng(27.72082717827009, -82.62637554579484),
  new google.maps.LatLng(27.70253437265598, -82.63923469715103),
  new google.maps.LatLng(27.68990272126018, -82.74069760369009),
  new google.maps.LatLng(27.72515726493167, -82.74425658265125),
  new google.maps.LatLng(27.74034181062215, -82.75904786197626),
  new google.maps.LatLng(27.76070488077913, -82.77147599758999),
  new google.maps.LatLng(27.77830268982443, -82.78298413912998),
  new google.maps.LatLng(27.78964532958511, -82.79029402196341),
  new google.maps.LatLng(27.79909905005665, -82.80084613650161),
  new google.maps.LatLng(27.8165524409219, -82.82393803027981),
  new google.maps.LatLng(27.85507436559001, -82.84848197800871),
  new google.maps.LatLng(27.88127709190831, -82.85367366747498),
  new google.maps.LatLng(27.92112964756437, -82.84830969673448),
  new google.maps.LatLng(27.94910608509703, -82.83565387816978),
  new google.maps.LatLng(27.96963401396241, -82.83047344829618),
  new google.maps.LatLng(28.01801973490679, -82.82909581897928),
  new google.maps.LatLng(28.04760555518778, -82.82152859456463),
  new google.maps.LatLng(28.05499402222965, -82.82436863331624),
  new google.maps.LatLng(28.0671321690225, -82.8366337945745),
  new google.maps.LatLng(28.09495397786371, -82.83646421274914),
  new google.maps.LatLng(28.13146469776984, -82.83540079246806),
  new google.maps.LatLng(28.1706254971067, -82.81783066159082),
  new google.maps.LatLng(28.17262567019322, -82.7842268356045)
];


function southWest(map_bcrs) {
  var sarasotaPoly = new google.maps.Polygon({

    paths: sarasota,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });
  sarasotaPoly.setMap(map_bcrs);
  google.maps.event.addListener(sarasotaPoly, "click", function() {
    getCountyCenter("sarasota");
  });


  var manateePoly = new google.maps.Polygon({
    paths: manatee,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.95
  });
  manateePoly.setMap(map_bcrs);
  google.maps.event.addListener(manateePoly, "click", function() {
    getCountyCenter("manatee");
  });
  var leePoly = new google.maps.Polygon({
    paths: lee,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  leePoly.setMap(map_bcrs);
  google.maps.event.addListener(leePoly, "click", function() {
    getCountyCenter("lee");
  });

  var pinellasPoly = new google.maps.Polygon({
    paths: pinellas,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  pinellasPoly.setMap(map_bcrs);
  google.maps.event.addListener(pinellasPoly, "click", function() {
    getCountyCenter("pinellas");
  });

  var charlottePoly = new google.maps.Polygon({
    paths: charlotte,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  charlottePoly.setMap(map_bcrs);
    google.maps.event.addListener(charlottePoly, "click", function() {
    getCountyCenter("charlotte");
  });

}

function panHandle(map_bcrs) {

  var escambiaPoly = new google.maps.Polygon({
    paths: escambia,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  escambiaPoly.setMap(map_bcrs);
  google.maps.event.addListener(escambiaPoly, "click", function() {
    getCountyCenter("escambia");
  });

  var okaloosaPoly = new google.maps.Polygon({
    paths: okaloosa,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  okaloosaPoly.setMap(map_bcrs);
  google.maps.event.addListener(okaloosaPoly, "click", function() {
    getCountyCenter("okaloosa");
  });

  var gulfPoly = new google.maps.Polygon({
    paths: gulf,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  gulfPoly.setMap(map_bcrs);
  google.maps.event.addListener(gulfPoly, "click", function() {
    getCountyCenter("gulf");
  });

  var franklinPoly = new google.maps.Polygon({
    paths: franklin,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#99CCFF',
    fillOpacity: 0.35
  });

  franklinPoly.setMap(map_bcrs);
  google.maps.event.addListener(franklinPoly, "click", function() {
    getCountyCenter("franklin");
  });
}

//call first because we need expanded defs only once and
//don't want to call with each marker generation
//--> zoomCounty()
function getExpandedDefs(county, myLat, myLon) {
  $.ajax({
    url: "/bcrs_v3/static/php/bcrs-get-expanded.php",
    success: function(data) {
      expandedDefs = (data);
      zoomCounty(county, myLat, myLon, expandedDefs);
    }
  });
}

//called last from getBeachData()
//TO DO: check each abbrv in expandedDefs against beachData and only
//display those variables.
function makeMarker(county, site, map_zoom, beachData, expandedDefs) {
  var image_file = "";
  var contentString =
  "<div class='infoBox'"+
    "<p><h1 class='infoBoxTitle'>"+site.location+"</h1><p>" +
  "<hr><table class=infoBoxTable>"+
  "<tr><td class='td_infoBoxSensor'><b>Last Report:</b></td>\
<td class='td_infoBoxData'>"+beachData.date+"</td></tr>"+
  "<tr><td class='td_infoBoxSensor'><b>Water Clarity:</b></td>\
<td class='td_infoBoxData'>"+beachData.watercolor+"</td></tr>"+
  "<tr><td class='td_infoBoxSensor'><b>Dead Fish:</b></td>\
<td class='td_infoBoxData'>"+beachData.deadfish+"</td></tr>"+
  "<tr><td class='td_infoBoxSensor'><b>Respiratory Irritation:</b>\
</td><td class='td_infoBoxData'>"+beachData.respirr+"</td></tr>"+
  "<tr><td class='td_infoBoxSensor'><b>Wind Direction:</b></td>\
<td class='td_infoBoxData'>"+beachData.winddir+"</td></tr>"+
  "<tr><td class='td_infoBoxSensor'><b>Surf Conditions:</b></td>\
<td class='td_infoBoxData'>"+beachData.surf+"</td></tr>";
  //all the per county features belowA
  //Beach Flag
  if (beachData.flag) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Beach Flag:</b></td><td class='td_infoBoxData'>"+beachData.flag+"</td></tr>";
  }
  //Red Drift Algae
  if (beachData.reddriftalgae) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'><b>\
Red Drift Algae:</b></td><td class='td_infoBoxData'>"+beachData.reddriftalgae+"</td></tr>";
    if (beachData.reddriftalgae != 'None') {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Red Drift Location:</b></td><td class='td_infoBoxData'>"+beachData.reddriftlocation+"</td></tr>";
    }
  }
  //Surf Type
  if (beachData.surftype) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Surf Type:</b></td><td class='td_infoBoxData'>"+beachData.surftype+"</td></tr>";
  }
  //Surf Height
  if (beachData.surfheight) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Surf Height:</b></td><td class='td_infoBoxData'>"+beachData.surfheight+" Feet</td></tr>";
  }
  //Rip Currents
  if (beachData.ripcurrent) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Rip Currents:</b></td><td class='td_infoBoxData'>"+beachData.ripcurrent+"</td></tr>";
  }
  //Panhandle Seaweed
  if (beachData.seaweed) {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'><b>\
Seaweed:</b></td><td class='td_infoBoxData'>"+beachData.seaweed+"</td></tr>";
    if (beachData.seaweed != 'None') {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Seaweed Location:</b></td><td class='td_infoBoxData'>"+beachData.seaweedlocation+"</td></tr>";
    }
  }
  //Lee county Images
  //Need to add onreadystatechange function that can modify content string
  //or better yet have thumbURL added to site data so we can just parse in object
  if (county == 'lee') {
    contentString = contentString +  "<tr><td class='td_infoBoxSensor'>\
<b>Image Taken:</b></td><td class='td_infoBoxData'>"+beachData.datetime+"</td></tr>";
    contentString = contentString + "<tr><td class='td_thumbURL'><img src="+
beachData.thumbURL+" width=128 height=128></img></td>";
    contentString = contentString +
//<a rel='lightbox' title='$timestamp' onmouseover=Slimbox.open('$fullUrl','')>
"<td class=td_thumbURL><img src='/bcrs_v3/static/images/lee_logo.jpg'>"+
"</img></td></tr>";
    contentString = contentString + "</table>";
  }
  else contentString = contentString + "</table>";

  var image = '/bcrs/static/images/flag_green.png';
  var myLatLng = new google.maps.LatLng(site.lat, site.lon);
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map_zoom,
      icon: image,
      title: site.location,
      cursor: site.location
  });

  var mapCenter = map_zoom.getCenter();
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map_zoom,marker);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/bcrs/static/php/clickCounts.php?location="+site.location+"&county="+county,true);
    xmlhttp.send(null);
  });

  google.maps.event.addListener(infowindow, 'closeclick', function() {
    map_zoom.setCenter(mapCenter);
  });
}

//Called fourth
//--> makeMarker()
function getBeachData(county, mySite, map_zoom, expandedDefs) {
  //console.log("getBeachData " +county+ " "+mySite.location);
  $.ajax({
    url: "/bcrs_v3/static/php/bcrs-handle-beach.php",
    data: {
    'county': county,
    'site' : mySite.location,
    },
    success: function(data){
      //console.log("Success for "+ mySite.location);
      //console.log(data);
      beachData = $.parseJSON(data);
      //console.log(beachData);
      makeMarker(county, mySite, map_zoom, beachData, expandedDefs);
    }
  });
}

//Called first to get county center
//--> calls getExandedDefs()
function getCountyCenter(county) {
  $.ajax({
    url: "/bcrs_v3/static/php/bcrs-county-center.php",
    data: {
    'county': county
    },
    success: function(data){
      myCenter = $.parseJSON(data);
      myLat = myCenter.lat;
      myLon = myCenter.lon;
      getExpandedDefs(county, myLat, myLon);
    }
  });
}

//Called third to build zoom map
//--> getBeachData()
function zoomCounty(county, myLat, myLon, expandedDefs) {
  $(".button_bar").css("display", "none");
  $(".title_bar").css("display", "block");
  $(".title_bar").append("<strong>"+ucwords(county)+" County</strong>");
  $(".title").html("<strong>"+ucwords(county)+" County</strong>");
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(myLat, myLon)
  };

  var map_zoom = new google.maps.Map(document.getElementById('map-canvas-bcrs'), mapOptions);
  $.ajax({
    url: "/bcrs_v3/static/php/bcrs-handle-county.php",
    data: {
      'county': county
    },
    success: function(data){
      mySites = (data.split('|'));
      for(index = 0; index < mySites.length;  index++) {
        mySite = $.parseJSON(mySites[index]);
        getBeachData(county, mySite, map_zoom, expandedDefs);
      }
    }
  });
}

function ucwords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
function contactUs() {
  window.location.href = "mailto:esmith@mote.org,rdc@mote.org?subject=BCRS Contact Us";
}

function emailSubs() {
  $("#map-canvas-bcrs").empty();
  $("#map-canvas-bcrs").css("background-color","white");
  $("#map-canvas-bcrs").css("background-position","center");
  $("#map-canvas-bcrs").css("background-repeat","no-repeat");
  //build form
  var innerHTML = "<strong>Manage Your Email Subscription</strong><hr>";
    innerHTML = innerHTML + "<form name='email subscription' method='get' action=''>\
<p><p>\
Select a county:\
<select name='county'></td>\
<option value='Sarasota'>Sarasota</option>\
<option value='Manatee'>Manatee</option>\
<option value='Lee'>Lee</option>\
<option value='Pinellas'>Pinellas</option>\
<option value='Charlotte'>Charlotte</option>\
<option value='Escambia'>Escambia</option>\
<option value='Okaloosa'>Okaloosa</option>\
<option value='Gulf'>Gulf</option>\
<option value='Franklin'>Franklin</option>\
</select><br>\
<b>Choose an action:&nbsp;</b><br>\
<INPUT type='radio' value='subscribe' checked name='rad'>Subscribe</INPUT>\
<INPUT type='radio' value='unsubscribe' name='rad'>Unsubscribe</INPUT>\
<INPUT type='radio' value='forgot' name='rad'>Forgot Password</INPUT>\
<br><b>email address: </b><input type='text' name='email' value=''><br>\
<b>password: </b><input type='password' name='password' value=''><br>\
<center><input type='button' name='button' value='submit' onClick ='javascript:completeSub(this.form)'>\
</form>\
";
  //apply html
  $("#map-canvas-bcrs").html(innerHTML);
}

function completeSub(form) {
if(validateEmail(form.email.value)) {

    if(form.rad[0].checked) {
        action = "subscribe"
    }
    if(form.rad[1].checked) {
        action = "unsubscribe";
    }

    if(form.rad[2].checked) {
        action = "forgot";
    }

    if (form.password.value.length < 4 && action != "forgot") {
        alert("Please use at least 4 characters in your password!\n");
    }

    if (action == "forgot") {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","/bcrs_v3/static/php/addEmail.php?email="+form.email.value+"\&county="+form.county.value+"\&action="+action+"\&password="+form.password.value,true);
        xmlhttp.send(null);
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4) {
                alert(xmlhttp.responseText);
            }
        }
    }

    if (form.password.value.length >= 4) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","/bcrs_v3/static/php/addEmail.php?email="+form.email.value+"\&county="+form.county.value+"\&action="+action+"\&password="+form.password.value,true);
        xmlhttp.send(null);
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4) {
                alert(xmlhttp.responseText);
            }
        }
    }
}
}

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true);
    }
    alert("Invalid E-mail Address! Please re-enter.");
    return(false);
}
