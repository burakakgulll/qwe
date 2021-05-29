var ipeName=["IPE 80","IPE 100","IPE 120","IPE 140","IPE 160","IPE 180","IPE 200","IPE 220","IPE 240","IPE 270","IPE 300","IPE 330","IPE 360","IPE 400","IPE 450","IPE 500","IPE 550","IPE 600"];
var ipeM=[0.05886,0.079461,0.102024,0.126549,0.154998,0.184428,0.219744,0.257022,0.301167,0.354141,0.413982,0.481671,0.560151,0.650403,0.761256,0.889767,1.03986,1.19682];
var ipeD=[80,100,120,140,160,180,200,220,240,270,300,330,360,400,450,500,550,600];
var ipeH = [59.6,74.6,93.4,112.2,127.2,146,159,177.6,190.4,219.6,248.6,271,298.6,331,378.8,426,467.6,514];
var ipeBf = [46,55,64,73,82,91,100,110,120,135,150,160,170,180,190,200,210,220];
var ipeTf = [5.2,5.7,6.3,6.9,7.4,8,8.5,9.2,9.8,10.2,10.7,11.5,12.7,13.5,14.6,16,17.2,19];
var ipeTw = [3.8,4.1,4.4,4.7,5,5.3,5.6,5.9,6.2,6.6,7.1,7.5,8,8.6,9.4,10.2,11.1,12];
var ipeR = [5,7,7,7,9,9,12,12,15,15,15,18,18,21,21,21,24,24];
var ipeH0 = [74.8,94.3,113.7,133.1,152.6,172,191.5,210.8,230.2,259.8,289.3,318.5,347.3,386.5,435.4,484,532.8,581];
var ipeLf = [4.42307692307692,4.82456140350877,5.07936507936508,5.28985507246377,5.54054054054054,5.6875,5.88235294117647,5.97826086956522,6.12244897959184,6.61764705882353,7.00934579439252,6.95652173913043,6.69291338582677,6.66666666666667,6.50684931506849,6.25,6.1046511627907,5.78947368421053];
var ipeLw = [15.6842105263158,18.1951219512195,21.2272727272727,23.8723404255319,25.44,27.5471698113208,28.3928571428571,30.1016949152542,30.7096774193548,33.2727272727273,35.0140845070423,36.1333333333333,37.325,38.4883720930233,40.2978723404255,41.7647058823529,42.1261261261261,42.8333333333333];
var ipeIts = [12.3409821782808,14.7250227273692,17.0812537184731,19.4449934146041,21.840479549474,24.2122134649933,26.6358495810812,29.3246492684965,32.0626256921802,35.945598074138,39.8066354415728,42.4457851138818,45.0928757422864,47.5285223816968,49.7812059673728,52.1361305030813,54.4510282283475,56.8963898744689];
var ipeA = [764,1030,1320,1640,2010,2390,2850,3340,3910,4590,5380,6260,7270,8450,9882,11550,13440,15600];
var ipeIx = [801000,1710000,3180000,5410000,8690000,13170000,19430000,27720000,38920000,57900000,83560000,117700000,162700000,231300000,337400000,482000000,671200000,920800000];
var ipeIy = [84900,159000,277000,449000,683000,1010000,1420000,2050000,2840000,4200000,6040000,7880000,10430000,13180000,16760000,21420000,26680000,33870000];
var ipeWex = [20000,34200,53000,77300,109000,146000,194000,252000,324000,429000,557000,713000,904000,1160000,1500000,1930000,2440000,3070000];
var ipeWey = [3690,5790,8650,12300,16700,22200,28500,37300,47300,62200,80500,98500,123000,146000,176400,214200,254100,307900];
var ipeWpx = [23200,39400,60700,88300,124000,166000,221000,285000,367000,484000,628000,804000,1019000,1307000,1702000,2194000,2787000,3512000];
var ipeWpy = [5800,9200,13600,19300,26100,34600,44600,58100,73900,97000,125000,154000,191000,229000,276000,336000,401000,486000];
var ipeRx = [32.4,40.7,49,57.4,65.8,74.2,82.6,91.1,99.7,112,125,137,150,166,184.8,204.3,224,243];
var ipeRy = [10.5,12.4,14.5,16.5,18.4,20.5,22.4,24.8,26.9,30.2,33.5,35.5,37.9,39.5,41.2,43.1,44.5,46.6];
var ipeJ = [7000,12000,17400,24500,36000,47900,69800,90700,129000,159000,201000,282000,373000,511000,669000,893000,1230000,1650000];
var ipeCw = [120000000,350000000,890000000,1980000000,3960000000,7430000000,13000000000,22700000000,37400000000,70600000000,126000000000,199000000000,314000000000,490000000000,791000000000,1249000000000,1884000000000,2846000000000];

function ipe_m(request) {

function check(value) {
return value==request;
};

function ipe_(name) {
var i = ipeName.findIndex(name);
return ipeM[i];
};

return ipe_(check);

};

function ipe_d(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeD[i];
    };
    
    return ipe_(check);
    
};

function ipe_h(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeH[i];
    };
    
    return ipe_(check);
    
};

function ipe_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeBf[i];
    };
    
    return ipe_(check);
    
};

function ipe_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeTf[i];
    };
    
    return ipe_(check);
    
};

function ipe_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeTw[i];
    };
    
    return ipe_(check);
    
};

function ipe_r(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeR[i];
    };
    
    return ipe_(check);
    
};

function ipe_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeH0[i];
    };
    
    return ipe_(check);
    
};

function ipe_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeLf[i];
    };
    
    return ipe_(check);
    
};

function ipe_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeLw[i];
    };
    
    return ipe_(check);
    
};

function ipe_its(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeIts[i];
    };
    
    return ipe_(check);
    
};

function ipe_a(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeA[i];
    };
    
    return ipe_(check);
    
};

function ipe_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeIx[i];
    };
    
    return ipe_(check);
    
};

function ipe_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeIy[i];
    };
    
    return ipe_(check);
    
};

function ipe_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeWex[i];
    };
    
    return ipe_(check);
    
};

function ipe_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeWey[i];
    };
    
    return ipe_(check);
    
};

function ipe_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeWpx[i];
    };
    
    return ipe_(check);
    
};

function ipe_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeWpy[i];
    };
    
    return ipe_(check);
    
};

function ipe_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeRx[i];
    };
    
    return ipe_(check);
    
};

function ipe_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeRy[i];
    };
    
    return ipe_(check);
    
};

function ipe_j(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeJ[i];
    };
    
    return ipe_(check);
    
};

function ipe_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipe_(name) {
    var i = ipeName.findIndex(name);
    return ipeCw[i];
    };
    
    return ipe_(check);
    
};