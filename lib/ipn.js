var ipnName=["IPN 80","IPN 100","IPN 120","IPN 140","IPN 160","IPN 180","IPN 200","IPN 220","IPN 240","IPN 260","IPN 280","IPN 300","IPN 320","IPN 340","IPN 360","IPN 380","IPN 400","IPN 450","IPN 500","IPN 550","IPN 600"];
var ipnM=[0.0582714,0.0818154,0.108891,0.140283,0.175599,0.214839,0.257022,0.305091,0.355122,0.411039,0.469899,0.531702,0.59841,0.66708,0.746541,0.82404,0.906444,1.12815,1.38321,1.62846,1.95219];
var ipnD=[80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,450,500,550,600];
var ipnH = [60.4,77.4,94.4,111.4,128.4,145.4,162.4,179.4,196.4,213,229.4,246,262.4,279,295,311.6,328,369,410,452,492];
var ipnBf = [42,50,58,66,74,82,90,98,106,113,119,125,131,137,143,149,155,170,185,200,215];
var ipnTf = [5.9,6.8,7.7,8.6,9.5,10.4,11.3,12.2,13.1,14.1,15.2,16.2,17.3,18.3,19.5,20.5,21.6,24.3,27,30,32.4];
var ipnTw = [3.9,4.5,5.1,5.7,6.3,6.9,7.5,8.1,8.7,9.4,10.1,10.8,11.5,12.2,13,13.7,14.4,16.2,18,19,21.6];
var ipnR = [3.9,4.5,5.1,5.7,6.3,6.9,7.5,8.1,8.7,9.4,10.1,10.8,11.5,12.2,13,13.7,14.4,16.2,18,19,21.6];
var ipnH0 = [74.1,93.2,112.3,131.4,150.5,169.6,188.7,207.8,226.9,245.9,264.8,283.8,302.7,321.7,340.5,359.5,378.4,425.7,473,520,567.6];
var ipnLf = [3.5593220338983,3.67647058823529,3.76623376623377,3.83720930232558,3.89473684210526,3.94230769230769,3.98230088495575,4.01639344262295,4.04580152671756,4.00709219858156,3.91447368421053,3.85802469135802,3.78612716763006,3.7431693989071,3.66666666666667,3.63414634146341,3.58796296296296,3.49794238683128,3.42592592592593,3.33333333333333,3.3179012345679];
var ipnLw = [15.4871794871795,17.2,18.5098039215686,19.5438596491228,20.3809523809524,21.0724637681159,21.6533333333333,22.1481481481481,22.5747126436782,22.6595744680851,22.7128712871287,22.7777777777778,22.8173913043478,22.8688524590164,22.6923076923077,22.7445255474453,22.7777777777778,22.7777777777778,22.7777777777778,23.7894736842105,22.7777777777778];
var ipnIts = [11.0460240139291,12.9544161912877,14.9220408477176,16.8606337707762,18.8207234268593,20.7582207016132,22.7581472739611,24.7150421951633,26.6726957811373,28.3953113250126,29.911199683777,31.390498682131,32.8940461067256,34.351229865626,35.8531969970481,37.4122262549988,38.8821608020691,42.5834224484035,46.2890835159868,50.2981754006407,53.6888246835061];
var ipnA = [757,1060,1420,1820,2280,2790,3340,3950,4610,5330,6100,6900,7770,8670,9700,10700,11800,14700,17900,21200,25400];
var ipnIx = [778000,1710000,3280000,5730000,9350000,14500000,21400000,30600000,42500000,57400000,75900000,98000000,125100000,157000000,196100000,240100000,292100000,458500000,687400000,991800000,1390000000];
var ipnIy = [62900,122000,215000,352000,547000,813000,1170000,1620000,2210000,2880000,3640000,4510000,5550000,6740000,8180000,9750000,11600000,17300000,24800000,34900000,46700000];
var ipnWex = [19500,34200,54700,81900,117000,161000,214000,278000,354000,442000,542000,653000,782000,923000,1090000,1260000,1460000,2040000,2750000,3610000,4630000];
var ipnWey = [3000,4880,7410,10700,14800,19800,26000,33100,41700,51000,61200,72200,84700,98400,114000,131000,149000,203000,268000,349000,434000];
var ipnWpx = [22800,39800,63600,95400,136000,187000,250000,324000,412000,514000,632000,762000,914000,1080000,1276000,1482000,1714000,2400000,3240000,4240000,5452000];
var ipnWpy = [5000,8100,12400,17900,24900,33200,43500,55700,70000,85900,103000,121000,143000,166000,194000,221000,253000,345000,456000,592000,752000];
var ipnRx = [32,40.1,48.1,56.1,64,72,80,88,95.9,104,111,119,127,135,142,150,157,177,196,216,234];
var ipnRy = [9.1,10.7,12.3,14,15.5,17.1,18.7,20.2,22,23.2,24.5,25.6,26.7,28,29,30.2,31.3,34.3,37.2,40.2,43];
var ipnJ = [8700,16000,27100,43200,65700,95800,135000,186000,250000,335000,442000,568000,725000,904000,1150000,1410000,1700000,2670000,4020000,5440000,7870000];
var ipnCw = [90000000,270000000,690000000,1540000000,3140000000,5920000000,10500000000,17800000000,28700000000,44100000000,64600000000,91800000000,129000000000,176000000000,240000000000,319000000000,420000000000,791000000000,1400000000000,2390000000000,3814000000000];

function ipn_m(request) {

function check(value) {
return value==request;
};

function ipn_(name) {
var i = ipnName.findIndex(name);
return ipnM[i];
};

return ipn_(check);

};

function ipn_d(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnD[i];
    };
    
    return ipn_(check);
    
};

function ipn_h(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnH[i];
    };
    
    return ipn_(check);
    
};

function ipn_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnBf[i];
    };
    
    return ipn_(check);
    
};

function ipn_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnTf[i];
    };
    
    return ipn_(check);
    
};

function ipn_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnTw[i];
    };
    
    return ipn_(check);
    
};

function ipn_r(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnR[i];
    };
    
    return ipn_(check);
    
};

function ipn_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnH0[i];
    };
    
    return ipn_(check);
    
};

function ipn_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnLf[i];
    };
    
    return ipn_(check);
    
};

function ipn_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnLw[i];
    };
    
    return ipn_(check);
    
};

function ipn_its(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnIts[i];
    };
    
    return ipn_(check);
    
};

function ipn_a(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnA[i];
    };
    
    return ipn_(check);
    
};

function ipn_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnIx[i];
    };
    
    return ipn_(check);
    
};

function ipn_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnIy[i];
    };
    
    return ipn_(check);
    
};

function ipn_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnWex[i];
    };
    
    return ipn_(check);
    
};

function ipn_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnWey[i];
    };
    
    return ipn_(check);
    
};

function ipn_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnWpx[i];
    };
    
    return ipn_(check);
    
};

function ipn_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnWpy[i];
    };
    
    return ipn_(check);
    
};

function ipn_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnRx[i];
    };
    
    return ipn_(check);
    
};

function ipn_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnRy[i];
    };
    
    return ipn_(check);
    
};

function ipn_j(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnJ[i];
    };
    
    return ipn_(check);
    
};

function ipn_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function ipn_(name) {
    var i = ipnName.findIndex(name);
    return ipnCw[i];
    };
    
    return ipn_(check);
    
};