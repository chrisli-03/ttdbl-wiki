import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../stylesheets/home.css"
//import "../stylesheets/font-awesome.min.css"

export class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}皇家特权
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default" id="special1">
                            <div className="panel-heading">
                                皇家特权
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4 col-sm-offset-2">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>皇家证明</h3>
                                                <hr />
                                                <p>
                                                    <span className="label label-default">每日获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石 x100<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买zeny x1<br />
                                                    <span className="label label-default">持续特权</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解除所有玩法的次数购买上限<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播<br />
                                                    <span className="label label-default">价格</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;￥28/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>皇家纹章</h3>
                                                <hr />
                                                <p>
                                                    <span className="label label-default">每日获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;钻石 x100<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;商城免费购买zeny x1<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;熔炼值 x2000<br />
                                                    <span className="label label-default">每五天获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;时装币 x1<br />
                                                    <span className="label label-default">持续特权</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;战斗跟随宠物经验 +50%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;随意进入爆满聊天室<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务上限 +2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解锁所有玩法的次数购买上限<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;新增快速探险功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +15%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可发送全频道广播<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;螺旋塔免费连续调整<br />
                                                    <span className="label label-default">价格</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;￥118/90天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default" id="special2">
                            <div className="panel-heading">
                                其他特权
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>宠物大师证明</h3>
                                                <hr />
                                                <p>
                                                    <span className="label label-default">每日获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;高级探险经验药水 x2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;高级战斗经验药水 x2<br />
                                                    <span className="label label-default">持续特权</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;探险任务经验 +30%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;战斗跟随宠物经验 +30%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;解锁探险‘一键领取’功能<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;宠物进化所需碎片 -12.5%<br />
                                                    <span className="label label-default">价格</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>佣兵公会证明</h3>
                                                <hr />
                                                <p>
                                                    <span className="label label-default">每日获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉 x300<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;熔炼 x8000<br />
                                                    <span className="label label-default">持续特权</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;挂机收益 +10%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;每日道场次数 +2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;荣誉获得 +5%<br />
                                                    <span className="label label-default">价格</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天
                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="thumbnail">
                                            <img src={"app/icons/Placeholder.jpg"} />
                                            <div className="caption">
                                                <h3>卢恩商会证明</h3>
                                                <hr />
                                                <p>
                                                    <span className="label label-default">每日获得</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;卢恩商会补给 x1<br />
                                                    <span className="label label-default">持续特权</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;背包负重 +50<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;黑市初始幸运 +400%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;刷新黑市消耗 -12.5%<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;黑市必出折扣道具<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;可购买卢恩商会专属时装<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;波利狂宴每日购买门票 +3<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;股市默认投资上限 +100000<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;股市转生投资上限 +50000<br />
                                                    <span className="label label-default">价格</span><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;280礼物币(￥28)/30天
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}领时装币
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>
                                            分享二维码/链接获得奖励<br />
                                            获得积分方法：<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;点击链接或扫二维码<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;创建角色<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;通过苏克拉特100<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;角色一转职<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;角色二转职<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;角色一转生
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">奖励列表</div>
                                            <table className="table table-striped table-condensed">
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积分</th>
                                                        <th>奖励</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20</td>
                                                        <td>时装币 x1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</td>
                                                        <td>荣誉 x100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???</td>
                                                        <td>??? x?</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <span><img src={"app/icons/Placeholder.jpg"} /></span>
                                {"  "}精彩活动
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                {"  "}首次充值
                                            </div>
                                            <div className="panel-body">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;时装 波利帽 x1<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;Zeny x10000<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;属性洗点书 x1<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;技能重置棒 x1
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                {"  "}绑定奖励
                                            </div>
                                            <div className="panel-body">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;钻石 x200<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;时装币 x1<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;zeny x10000<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;榴莲 x10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}波利狂宴
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}波利股市
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}每日签到
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}生命研究所
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}商城
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}黑市
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}交易所
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}铁匠
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}好友
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}公会
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}决斗
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}道场
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}战队
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}锦标赛
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}战团
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <span><img src={"app/icons/Placeholder.jpg"} /></span>
                        {"  "}螺旋塔
                    </div>
                    <div className="panel-body">
                        XXXXXX
                    </div>
                </div>
            </div>
        );
    }
}