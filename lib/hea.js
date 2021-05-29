var heaName=["HEA 100","HEA 120","HEA 140","HEA 160","HEA 180","HEA 200","HEA 220","HEA 240","HEA 260","HEA 280","HEA 300","HEA 320","HEA 340","HEA 360","HEA 400","HEA 450","HEA 500","HEA 550","HEA 600","HEA 650","HEA 700","HEA 800","HEA 900","HEA 1000"];
var heaM=[0.163827,0.195219,0.242307,0.298224,0.348255,0.414963,0.495405,0.591543,0.669042,0.749484,0.866223,0.957456,1.03005,1.09872,1.22625,1.3734,1.52055,1.62846,1.74618,1.8639,2.00124,2.19744,2.47212,2.66832];
var heaD=[96,114,133,152,171,190,210,230,250,270,290,310,330,350,390,440,490,540,590,640,690,790,890,990];
var heaH = [56,74,92,104,122,134,152,164,177,196,208,225,243,261,298,344,390,438,486,534,582,674,770,868];
var heaBf = [100,120,140,160,180,200,220,240,260,280,300,300,300,300,300,300,300,300,300,300,300,300,300,300];
var heaTf = [8,8,8.5,9,9.5,10,11,12,12.5,13,14,15.5,16.5,17.5,19,21,23,24,25,26,27,28,30,31];
var heaTw = [5,5,5.5,6,6,6.5,7,7.5,7.5,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14.5,15,16,16.5];
var heaR = [12,12,12,15,15,18,18,21,24,24,27,27,27,27,27,27,27,27,27,27,27,30,30,30];
var heaH0 = [88,106,124.5,143,161.5,180,199,218,237.5,257,276,294.5,313.5,332.5,371,419,467,516,565,614,663,762,860,959];
var heaLf = [6.25,7.5,8.23529411764706,8.88888888888889,9.47368421052632,10,10,10,10.4,10.7692307692308,10.7142857142857,9.67741935483871,9.09090909090909,8.57142857142857,7.89473684210526,7.14285714285714,6.52173913043478,6.25,6,5.76923076923077,5.55555555555556,5.35714285714286,5,4.83870967741935];
var heaLw = [11.2,14.8,16.7272727272727,17.3333333333333,20.3333333333333,20.6153846153846,21.7142857142857,21.8666666666667,23.6,24.5,24.4705882352941,25,25.5789473684211,26.1,27.0909090909091,29.9130434782609,32.5,35.04,37.3846153846154,39.5555555555556,40.1379310344828,44.9333333333333,48.125,52.6060606060606];
var heaIts = [28.0606766633157,33.5792991463228,39.0543461932037,44.6053506397997,50.2015588059795,55.7473015910422,61.302176787208,66.9405503200227,72.6242163297016,78.0749241428021,83.7156266213847,83.6210571746586,83.4211543434068,83.2233222842711,82.7285631179336,82.3980790630404,82.0870346035231,81.5867296378806,81.0964843597881,80.6158597745638,79.9397553627477,79.0373414192413,78.1457300603086,77.2539303936907];
var heaA = [2120,2530,3140,3880,4530,5380,6430,7680,8680,9730,11250,12440,13350,14280,15900,17800,19750,21180,22650,24160,26050,28580,32050,34680];
var heaIx = [3492000,6062000,10330000,16730000,25100000,36920000,54100000,77630000,104500000,136700000,182600000,229300000,276900000,330900000,450700000,637200000,869700000,1119000000,1412000000,1752000000,2153000000,3034000000,4221000000,5538000000];
var heaIy = [1338000,2309000,3893000,6156000,9246000,13360000,19550000,27690000,36680000,47630000,63100000,69850000,74360000,78870000,85640000,94650000,103700000,108200000,112700000,117200000,121800000,126400000,135500000,140000000];
var heaWex = [72760,106300,155400,220100,293600,388600,515200,675100,836400,1013000,1260000,1479000,1678000,1891000,2311000,2896000,3550000,4146000,4787000,5474000,6241000,7682000,9485000,11190000];
var heaWey = [26760,38480,55620,76950,102700,133600,177700,230700,282100,340200,420600,465700,495700,525800,570900,631000,691100,721300,751400,781600,811900,842600,903200,933600];
var heaWpx = [83010,119500,173500,245100,324900,429500,568500,744600,919800,1112000,1383000,1628000,1850000,2088000,2562000,3216000,3949000,4622000,5350000,6136000,7032000,8699000,10810000,12820000];
var heaWpy = [41140,58850,84850,117600,156500,203800,270600,351700,430200,518100,641200,709700,755900,802300,872900,965500,1059000,1107000,1156000,1205000,1257000,1312000,1414000,1470000];
var heaRx = [40.6,48.9,57.3,65.7,74.5,82.8,91.7,100.5,109.7,118.6,127.4,135.8,144,152.2,168.4,189.2,209.8,229.9,249.7,269.3,287.5,325.8,362.9,399.6];
var heaRy = [25.1,30.2,35.2,39.8,45.2,49.8,55.1,60,65,70,74.9,74.9,74.6,74.3,73.4,72.9,72.4,71.5,70.5,69.7,68.4,66.5,65,63.5];
var heaJ = [52400,59900,81300,121900,148000,209800,284600,415500,523700,621000,851700,1080000,1272000,1488000,1890000,2438000,3093000,3515000,3978000,4483000,5139000,5969000,7368000,8224000];
var heaCw = [2580000000,6470000000,15060000000,31410000000,60210000000,108000000000,193300000000,328500000000,516400000000,785400000000,1200000000000,1512000000000,1824000000000,2177000000000,2942000000000,4148000000000,5643000000000,7189000000000,8978000000000,11030000000000,13350000000000,18290000000000,24960000000000,32070000000000];

function hea_m(request) {

function check(value) {
return value==request;
};

function hea_(name) {
var i = heaName.findIndex(name);
return heaM[i];
};

return hea_(check);

};

function hea_d(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaD[i];
    };
    
    return hea_(check);
    
};

function hea_h(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaH[i];
    };
    
    return hea_(check);
    
};

function hea_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaBf[i];
    };
    
    return hea_(check);
    
};

function hea_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaTf[i];
    };
    
    return hea_(check);
    
};

function hea_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaTw[i];
    };
    
    return hea_(check);
    
};

function hea_r(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaR[i];
    };
    
    return hea_(check);
    
};

function hea_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaH0[i];
    };
    
    return hea_(check);
    
};

function hea_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaLf[i];
    };
    
    return hea_(check);
    
};

function hea_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaLw[i];
    };
    
    return hea_(check);
    
};

function hea_its(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaIts[i];
    };
    
    return hea_(check);
    
};

function hea_a(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaA[i];
    };
    
    return hea_(check);
    
};

function hea_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaIx[i];
    };
    
    return hea_(check);
    
};

function hea_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaIy[i];
    };
    
    return hea_(check);
    
};

function hea_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaWex[i];
    };
    
    return hea_(check);
    
};

function hea_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaWey[i];
    };
    
    return hea_(check);
    
};

function hea_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaWpx[i];
    };
    
    return hea_(check);
    
};

function hea_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaWpy[i];
    };
    
    return hea_(check);
    
};

function hea_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaRx[i];
    };
    
    return hea_(check);
    
};

function hea_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaRy[i];
    };
    
    return hea_(check);
    
};

function hea_j(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaJ[i];
    };
    
    return hea_(check);
    
};

function hea_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function hea_(name) {
    var i = heaName.findIndex(name);
    return heaCw[i];
    };
    
    return hea_(check);
    
};