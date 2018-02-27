<?php

switch (getGet('r')) {
    case null               : emptyResult();    break;
    case 'login'            : login();          break;
    case 'logout'           : logout();         break;
    case 'getdata'          : getData();        break;
    case 'edithome'         : editHome();       break;
    case 'editfizio'        : editFizio();      break;
    case 'editvingr'        : editVingr();      break;
    case 'editkont'         : editKont();       break;
    case 'editabout'        : editAbout();      break;
    case 'editvideo'        : editVideo();      break;
    case 'uploadImg'        : uploadImg();      break;
    case 'newFizio'         : newFizio();       break;
    case 'delFizio'         : delFizio();       break;
    case 'newVingr'         : newVingr();       break;
    case 'delVingr'         : delVingr();       break;
    case 'saveKal'          : saveKal();        break;
    case 'createKal'        : createKal();      break;
    case 'delKal'           : delKal();         break;
    case 'createAdd'        : createAdd();      break;
    case 'updateKont'       : updateKonta();    break;
    case 'updateAdd'        : updateAdd();      break;
    case 'delAdd'           : delAdd();         break;
    case 'updateAbout'      : updateAbouta();   break;
    case 'delAb'            : delAb();          break;
    case 'newAbout'         : newAbout();       break;
    case 'newGal'           : newGal();         break;
    case 'galImg'           : galImg();         break;
    case 'delGal'           : delGal();         break;
    case 'delSmallGal'      : delSmallGal();    break;
    case 'updateFiz'        : updateFiz();      break;
    case 'updateVin'        : updateVin();      break;
    
    default              : notSupported();
}
