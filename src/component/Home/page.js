import React, {Component} from 'react';
import styled from 'styled-components';
import {TabBar} from 'antd-mobile';
import Log from '../Log/page';
import My from '../My/page';
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'

const Nav = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0
`

export default class Page extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      activeBar: 1
    }
  }

  componentDidMount() {
    console.log(">>>>>>>>>>", this.props)
  }

  render() {
    console.log(this.state)
    const {activeBar} = this.state
    console.log(activeBar)
    return (
        <div className="t4top">

          <Nav>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
              <TabBar.Item
                  title="Life"
                  key="Life"
                  icon={<HomeIcon/>}
                  selectedIcon={<HomeIcon/>}
                  selected={activeBar === 1}
                  badge={1}
                  onPress={() => {
                    this.setState({
                      activeBar: 1,
                    });
                  }}
                  data-seed="logId"
              >
                <Log/>
              </TabBar.Item>
              <TabBar.Item
                  icon={<PersonIcon/>}
                  selectedIcon={<PersonIcon/>}
                  title="Koubei"
                  key="Koubei"
                  badge={'2'}
                  selected={activeBar === 2}
                  onPress={() => {
                    this.setState({
                      activeBar: 2,
                    });
                  }}
                  data-seed="logId1"
              >
                <My/>
              </TabBar.Item>

            </TabBar>
          </Nav>
        </div>
    )
  }

}