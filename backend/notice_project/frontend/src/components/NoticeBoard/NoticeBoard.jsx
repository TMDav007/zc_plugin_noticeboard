import React from "react";
import { useEffect, useState } from "react";
import "./NoticeBoard.css";
import NoticeBoardHeader from "./NoticeBoardHeader";
import AdminNotice from "../NoticeBoard/noticeBoardComponent/AdminNotice";
import OldNotices from "../NoticeBoard/noticeBoardComponent/Old_Notices/oldNotices";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import CreateNotice from "./noticeBoardComponent/CreateNotice";
import UserIntro from "../NoticeBoard/noticeBoardComponent/UserIntro component/UserIntro";
import UserNotice from "./noticeBoardComponent/UserNoticeBoard";
import EmailUnsubscription from "./EmailUnsubscriptionPage/EmailUnsubscription";
import SearchResult from "./noticeBoardComponent/SearchResult";

function NoticeBoard({userInfo}) {
	return (
		<div className="notice">
			<NoticeBoardHeader userInfo={userInfo}/>
			<Switch>
				<Route exact path="/noticeboard/search">
					<SearchResult />
				</Route>

				<Route exact path="/noticeboard/create-notice">
					<CreateNotice />
				</Route>
				<Route exact path="/noticeboard/admin-notice">
					<AdminNotice />
				</Route>
				<Route exact path="/noticeboard/user-notice">
					<UserNotice />
				</Route>

				<Route exact path="/noticeboard/old-notices">
					<OldNotices />
				</Route>


				<Route exact path="/noticeboard/unsubscribe-email/:id">
					<EmailUnsubscription />
				</Route>

				<Route exact path="/noticeboard">
					<UserIntro />
				</Route>

				{/* <Route path="/"> 
      this component should be created in the NoticeBoard/noticeBoard folder  remember to create a link for the View Notice Button that routes to admin-notice above <UserNotice />
    </Route> */}
			</Switch>
		</div>
	);
}

export default NoticeBoard;
