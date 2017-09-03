import { MenuItem } from "../../shared/component/menu.item";
import { NumberItem } from "../../shared/component/number.item";

export class HotmotItem {

    // 個数
    dnumber: NumberItem[] = [
        {id: '1', value: 1},
        {id: '2', value: 2},
        {id: '3', value: 3},
        {id: '4', value: 4},
        {id: '5', value: 5},
        {id: '6', value: 6},
        {id: '7', value: 7},
        {id: '8', value: 8},
        {id: '9', value: 9}
    ]; 

    // メニュー
    dmenu: MenuItem[] = [
        {id: '1', value: 'から揚げ弁当', price: 440},
        {id: '2', value: '特から揚げ弁当', price: 490},
        {id: '3', value: 'チキン南蛮弁当', price: 470},
        {id: '4', value: 'ロースとんかつ弁当', price: 470},
        {id: '5', value: 'おろしチキン竜田弁当', price: 500},
        {id: '6', value: '焼肉弁当', price: 520},
        {id: '7', value: '特焼肉弁当', price: 660},
        {id: '8', value: 'デミハンバーグ弁当', price: 520},
        {id: '9', value: 'ロースかつとじ弁当', price: 470},
        {id: '10', value: '肉野菜炒め弁当', price: 500},
        {id: '11', value: '和風幕の内弁当', price: 500},
        {id: '12', value: '特選幕の内弁当', price: 770},
        {id: '13', value: 'のり弁当', price: 330},
        {id: '14', value: '特のりタル弁当', price: 430},
        {id: '15', value: 'のり牛', price: 390},
        {id: '16', value: 'BIGのり弁(コロッケ)', price: 490},
        {id: '17', value: 'BIGのり弁(白身フライ)', price: 520},
        {id: '18', value: 'ロースかつ丼', price: 440},
        {id: '19', value: '高菜弁当', price: 400},
        {id: '20', value: 'ビーフカレー', price: 460},
        {id: '21', value: 'ビーフカレー(ルーのみ)', price: 360},
        {id: '22', value: 'ロースカツカレー', price: 650}
    ];
    
    // サイズ
    dsize: MenuItem[] = [
        {id: '1', value: '小', price: -20}, 
        {id: '2', value: '普通', price: 0},
        {id: '3', value: '大', price: 50}
    ];
    
}
