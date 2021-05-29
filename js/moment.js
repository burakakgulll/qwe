function mx_kom1(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var m_kom1=0.5*kom1*x*(length-x);
var m_kom2=0.5*kom2*x*(length-x);
var m_kom3=0.5*kom3*x*(length-x);

}

if(mesnet=="pf") {
var m_kom1=0.375*kom1*length*x-0.5*kom1*x*x;
var m_kom2=0.375*kom2*length*x-0.5*kom2*x*x;
var m_kom3=0.375*kom3*length*x-0.5*kom3*x*x;

};

if (mesnet=="ff") {
var m_kom1=(kom1/12)*(6*length*x-length*length-6*x*x);
var m_kom2=(kom3/12)*(6*length*x-length*length-6*x*x);
var m_kom3=(kom3/12)*(6*length*x-length*length-6*x*x);

};

if (mesnet=="konsol") {
var m_kom1=-kom1*x*x*0.5;
var m_kom2=-kom2*x*x*0.5;
var m_kom3=-kom3*x*x*0.5;
};


return m_kom1;


};

function mx_kom2(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var m_kom1=0.5*kom1*x*(length-x);
var m_kom2=0.5*kom2*x*(length-x);
var m_kom3=0.5*kom3*x*(length-x);

}

if(mesnet=="pf") {
var m_kom1=0.375*kom1*length*x-0.5*kom1*x*x;
var m_kom2=0.375*kom2*length*x-0.5*kom2*x*x;
var m_kom3=0.375*kom3*length*x-0.5*kom3*x*x;

};

if (mesnet=="ff") {
var m_kom1=(kom1/12)*(6*length*x-length*length-6*x*x);
var m_kom2=(kom3/12)*(6*length*x-length*length-6*x*x);
var m_kom3=(kom3/12)*(6*length*x-length*length-6*x*x);

};

if (mesnet=="konsol") {
var m_kom1=-kom1*x*x*0.5;
var m_kom2=-kom2*x*x*0.5;
var m_kom3=-kom3*x*x*0.5;
};


return m_kom2;


};

function mx_kom3(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var m_kom1=0.5*kom1*x*(length-x);
var m_kom2=0.5*kom2*x*(length-x);
var m_kom3=0.5*kom3*x*(length-x);

}

if(mesnet=="pf") {
var m_kom1=0.375*kom1*length*x-0.5*kom1*x*x;
var m_kom2=0.375*kom2*length*x-0.5*kom2*x*x;
var m_kom3=0.375*kom3*length*x-0.5*kom3*x*x;

};

if (mesnet=="ff") {
var m_kom1=(kom1/12)*(6*length*x-length*length-6*x*x);
var m_kom2=(kom3/12)*(6*length*x-length*length-6*x*x);
var m_kom3=(kom3/12)*(6*length*x-length*length-6*x*x);

};

if (mesnet=="konsol") {
var m_kom1=-kom1*x*x*0.5;
var m_kom2=-kom2*x*x*0.5;
var m_kom3=-kom3*x*x*0.5;
};


return m_kom3;


};






function vx_kom1(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);

}

if(mesnet=="pf") {
var v_kom1=0.375*kom1*length-kom1*x;
var v_kom2=0.375*kom2*length-kom2*x;
var v_kom3=0.375*kom3*length-kom3*x;

};

if (mesnet=="ff") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);
};

if (mesnet=="konsol") {
var v_kom1=-kom1*x;
var v_kom2=-kom2*x;
var v_kom3=-kom3*x;
};


return v_kom1;


};

function vx_kom2(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);

}

if(mesnet=="pf") {
var v_kom1=0.375*kom1*length-kom1*x;
var v_kom2=0.375*kom2*length-kom2*x;
var v_kom3=0.375*kom3*length-kom3*x;

};

if (mesnet=="ff") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);
};

if (mesnet=="konsol") {
var v_kom1=-kom1*x;
var v_kom2=-kom2*x;
var v_kom3=-kom3*x;
};


return v_kom2;


};

function vx_kom3(xx,mesnet,length,g,q,s){

var x = parseFloat(xx);
var kom1=1.4*g;
var kom2=1.2*g+1.6*q+0.5*s;
var kom3=1.2*g+1.6*s+q;

if (mesnet=="pp") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);

}

if(mesnet=="pf") {
var v_kom1=0.375*kom1*length-kom1*x;
var v_kom2=0.375*kom2*length-kom2*x;
var v_kom3=0.375*kom3*length-kom3*x;

};

if (mesnet=="ff") {
var v_kom1=kom1*(0.5*length-x);
var v_kom2=kom2*(0.5*length-x);
var v_kom3=kom3*(0.5*length-x);
};

if (mesnet=="konsol") {
var v_kom1=-kom1*x;
var v_kom2=-kom2*x;
var v_kom3=-kom3*x;
};


return v_kom3;


};


function def_kom1(xx,mesnet,lengthh,g,q,s,e,i){

var x = parseFloat(xx)*1000;
var length=lengthh*1000;

var defkom1=g+q;
var defkom2=g+0.5*s;
var defkom3=q;
var defkom4=s;

if (mesnet=="pp") {
var d_kom1=((defkom1*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom2=((defkom2*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom3=((defkom3*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom4=((defkom4*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);

}

if(mesnet=="pf") {
var d_kom1=((defkom1*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom2=((defkom2*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom3=((defkom3*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom4=((defkom4*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
};

if (mesnet=="ff") {
var d_kom1=((defkom1*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom2=((defkom2*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom3=((defkom3*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom4=((defkom4*x*x)/(24*e*i))*(length-x)*(length-x);
};

if (mesnet=="konsol") {
var d_kom1=((defkom1)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom2=((defkom2)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom3=((defkom3)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom4=((defkom4)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
};


return d_kom1;


};

function def_kom2(xx,mesnet,lengthh,g,q,s,e,i){

var x = parseFloat(xx)*1000;
var length=lengthh*1000;

var defkom1=g+q;
var defkom2=g+0.5*s;
var defkom3=q;
var defkom4=s;

if (mesnet=="pp") {
var d_kom1=((defkom1*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom2=((defkom2*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom3=((defkom3*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom4=((defkom4*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);

}

if(mesnet=="pf") {
var d_kom1=((defkom1*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom2=((defkom2*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom3=((defkom3*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom4=((defkom4*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
};

if (mesnet=="ff") {
var d_kom1=((defkom1*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom2=((defkom2*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom3=((defkom3*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom4=((defkom4*x*x)/(24*e*i))*(length-x)*(length-x);
};

if (mesnet=="konsol") {
var d_kom1=((defkom1)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom2=((defkom2)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom3=((defkom3)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom4=((defkom4)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
};


return d_kom2;


};

function def_kom3(xx,mesnet,lengthh,g,q,s,e,i){

var x = parseFloat(xx)*1000;
var length=lengthh*1000;

var defkom1=g+q;
var defkom2=g+0.5*s;
var defkom3=q;
var defkom4=s;

if (mesnet=="pp") {
var d_kom1=((defkom1*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom2=((defkom2*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom3=((defkom3*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom4=((defkom4*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);

}

if(mesnet=="pf") {
var d_kom1=((defkom1*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom2=((defkom2*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom3=((defkom3*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom4=((defkom4*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
};

if (mesnet=="ff") {
var d_kom1=((defkom1*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom2=((defkom2*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom3=((defkom3*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom4=((defkom4*x*x)/(24*e*i))*(length-x)*(length-x);
};

if (mesnet=="konsol") {
var d_kom1=((defkom1)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom2=((defkom2)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom3=((defkom3)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom4=((defkom4)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
};


return d_kom3;


};

function def_kom4(xx,mesnet,lengthh,g,q,s,e,i){

var x = parseFloat(xx)*1000;
var length=lengthh*1000;

var defkom1=g+q;
var defkom2=g+0.5*s;
var defkom3=q;
var defkom4=s;

if (mesnet=="pp") {
var d_kom1=((defkom1*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom2=((defkom2*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom3=((defkom3*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);
var d_kom4=((defkom4*x)/(24*e*i))*(length*length*length-2*length*x*x+x*x*x);

}

if(mesnet=="pf") {
var d_kom1=((defkom1*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom2=((defkom2*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom3=((defkom3*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
var d_kom4=((defkom4*x)/(48*e*i))*(length*length*length-3*length*x*x+2*x*x*x);
};

if (mesnet=="ff") {
var d_kom1=((defkom1*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom2=((defkom2*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom3=((defkom3*x*x)/(24*e*i))*(length-x)*(length-x);
var d_kom4=((defkom4*x*x)/(24*e*i))*(length-x)*(length-x);
};

if (mesnet=="konsol") {
var d_kom1=((defkom1)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom2=((defkom2)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom3=((defkom3)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
var d_kom4=((defkom4)/(24*e*i))*(x*x*x*x-4*length*length*length*x+3*length*length*length*length);
};


return d_kom4;


};