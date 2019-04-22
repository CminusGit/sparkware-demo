import {Service} from '../Base/service.js'

export class QrcodeService extends Service{
    getQrcode(url){
        return this.get(`qrcode?data=${url}`);
    }
}