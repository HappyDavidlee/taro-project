import Taro, {Component} from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {showDrawer} from "../../actions/menu";
import './menu.less';

@connect(function (store) {
  return {...store.menu}
}, function (dispatch) {
  return {
    showMenu() {
      dispatch(showDrawer())

    }
  }
})
class Menu extends Component {
  //显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }

  render() {
    return (
      <View className='topiclist-menu'>
        <Image onClick={this.showDrawer.bind(this)} className='image left' src={require('../../assets/img/cata.png')}/>
        <Text>{this.props.currentCata.value ? this.props.currentCata.value : ''}</Text>
        <Image className='image right' src={require('../../assets/img/login.png')}/>
      </View>
    )
  }
}

export default Menu;
