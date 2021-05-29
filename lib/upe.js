var upeName=["UPE 80","UPE 100","UPE 120","UPE 140","UPE 160","UPE 180","UPE 200","UPE 220","UPE 240","UPE 270","UPE 300","UPE 330","UPE 360","UPE 400"];
var upeM=[0.077499,0.0963342,0.118701,0.142245,0.16677,0.193257,0.223668,0.260946,0.296262,0.345312,0.435564,0.521892,0.600372,0.708282];
var upeD=[80,100,120,140,160,180,200,220,240,270,300,330,360,400];
var upeH = [46,65,80,98,117,135,152,170,185,213,240,262,290,328];
var upeBf = [50,55,60,65,70,75,80,85,90,95,100,105,110,115];
var upeTf = [7,7.5,8,9,9.5,10.5,11,12,12.5,13.5,15,16,17,18];
var upeTw = [4,4.5,5,5,5.5,5.5,6,6.5,7,7.5,9.5,11,12,13.5];
var upeR = [10,10,12,12,12,12,13,13,15,15,15,18,18,18];
var upeH0 = [73,92.5,112,131,150.5,169.5,189,208,227.5,256.5,285,314,343,382];
var upeLf = [7.14285714285714,7.33333333333333,7.5,7.22222222222222,7.36842105263158,7.14285714285714,7.27272727272727,7.08333333333333,7.2,7.03703703703704,6.66666666666667,6.5625,6.47058823529412,6.38888888888889];
var upeLw = [11.5,14.4444444444444,16,19.6,21.2727272727273,24.5454545454545,25.3333333333333,26.1538461538462,26.4285714285714,28.4,25.2631578947368,23.8181818181818,24.1666666666667,24.2962962962963];
var upeIts = [16.7175764646629,18.5510497595136,20.2834319501533,22.0546587437693,23.8955656358559,25.6940030580073,27.4026074460095,29.2022981395665,30.9051212369406,32.7855833037839,34.6133728162973,36.1982589389655,37.8671321359955,39.6019225001673];
var upeA = [1010,1250,1540,1840,2170,2510,2900,3390,3850,4480,5660,6780,7790,9190];
var upeIx = [1070000,2070000,3640000,5990000,9110000,13530000,19090000,26820000,35990000,52550000,78230000,110080000,148250000,209810000];
var upeIy = [255000,383000,555000,788000,1070000,1440000,1870000,2460000,3110000,4010000,5380000,6820000,8410000,10450000];
var upeWex = [26800,41400,60600,85600,114000,150000,191000,244000,300000,389000,522000,667000,824000,1049000];
var upeWey = [7980,10600,13800,18200,22600,28600,34400,42500,50100,60700,75600,89700,105000,123000];
var upeWpx = [31200,48000,70300,98800,132000,173000,220000,281000,347000,451000,613000,792000,982000,1260000];
var upeWpy = [14300,19300,25300,33200,41500,52300,63300,78200,92200,112000,137000,156000,178000,191000];
var upeRx = [32.6,40.7,48.6,57.1,64.8,73.4,81.1,89,96.7,108,118,127,138,151];
var upeRy = [15.9,17.5,19,20.7,22.2,23.9,25.4,27,28.4,29.9,30.8,31.7,32.9,33.7];
var upeJ = [14700,20100,29000,40500,52000,69900,88900,121000,151000,199000,315000,452000,585000,791000];
var upeCw = [220000000,530000000,1120000000,2200000000,3960000000,6810000000,11000000000,17600000000,26400000000,43600000000,72700000000,112000000000,166000000000,259000000000];

function upe_m(request) {

function check(value) {
return value==request;
};

function upe_(name) {
var i = upeName.findIndex(name);
return upeM[i];
};

return upe_(check);

};

function upe_d(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeD[i];
    };
    
    return upe_(check);
    
};

function upe_h(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeH[i];
    };
    
    return upe_(check);
    
};

function upe_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeBf[i];
    };
    
    return upe_(check);
    
};

function upe_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeTf[i];
    };
    
    return upe_(check);
    
};

function upe_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeTw[i];
    };
    
    return upe_(check);
    
};

function upe_r(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeR[i];
    };
    
    return upe_(check);
    
};

function upe_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeH0[i];
    };
    
    return upe_(check);
    
};

function upe_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeLf[i];
    };
    
    return upe_(check);
    
};

function upe_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeLw[i];
    };
    
    return upe_(check);
    
};

function upe_its(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeIts[i];
    };
    
    return upe_(check);
    
};

function upe_a(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeA[i];
    };
    
    return upe_(check);
    
};

function upe_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeIx[i];
    };
    
    return upe_(check);
    
};

function upe_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeIy[i];
    };
    
    return upe_(check);
    
};

function upe_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeWex[i];
    };
    
    return upe_(check);
    
};

function upe_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeWey[i];
    };
    
    return upe_(check);
    
};

function upe_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeWpx[i];
    };
    
    return upe_(check);
    
};

function upe_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeWpy[i];
    };
    
    return upe_(check);
    
};

function upe_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeRx[i];
    };
    
    return upe_(check);
    
};

function upe_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeRy[i];
    };
    
    return upe_(check);
    
};

function upe_j(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeJ[i];
    };
    
    return upe_(check);
    
};

function upe_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function upe_(name) {
    var i = upeName.findIndex(name);
    return upeCw[i];
    };
    
    return upe_(check);
    
};