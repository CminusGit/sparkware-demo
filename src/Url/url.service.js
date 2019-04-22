import {Service} from '../Base/service.js'

export class UrlService extends Service{
    getUrls(){
        return this.get('url');
    }
}