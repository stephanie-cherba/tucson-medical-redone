import React from 'react'
import {createUseStyles} from 'react-jss'
import {TextAndLine} from './TextAndLine'
import {TidBits} from './TidBits'

const useStyles = createUseStyles({
	container: {
		padding: '0 150px',
		fontSize: '12px',
	},
	title: {
		fontSize: '18px',
		fontWeight: '600',
	},
	title2: {
		fontSize: '18px',
		fontWeight: '600',
		paddingTop: '50px'
	},
	subtitle: {
		fontSize: '12px',
		fontWeight: '600',
	},
	body: {
		textIndent: '2em',
	},
})

export const Policies = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Policies</div>
				<div className={classes.subtitle}>Privacy Statement</div>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) 
					has created this privacy statement in order to demonstrate our firm commitment to privacy. 
					The following discloses our information gathering and dissemination practices for this website: 
					TucsonMedical.com.</p>
				<p className={classes.body}>We collect personal information when you register or subscribe to our services. 
					We may use this information to help diagnose problems with our server, and to administer our web site. In 
					addition, we may use this information to document the source of submissions to this web site. These 
					submissions may include but are not limited to: subscription requests, product purchase requests, photos, 
					stories, articles, tips, and forum postings. We may use cookies to store personal preferences in order to 
					enhance your experience with this site. For example to save a unique identifier code so you do not have to 
					login each time you visit our site. Our cookies do not contain passwords or information that is personally 
					identifiable outside of our site. We never use cookies to retrieve any information about you that we did 
					not store in the cookies originally.</p>
				<p className={classes.body}>Our site's registration and subscriptions forms require users to provide contact 
					information (such as names and email addresses). This customer contact information may be used to contact 
					the visitor when necessary. Users may opt-out of receiving future mailings; see the choice/opt-out section 
					below. You may receive a username and password for some services on this site. You may change your password 
					at any time and we encourage you to do so frequently. Your username and password are unique to you and are 
					non-transferable.</p>
				<p className={classes.body}>This site contains links to other sites. Golden West Medical Center, P.C. (DBA 
					Golden West Weight Loss) is not responsible for the privacy practices or the content of such Web sites.</p>
				<p className={classes.body}>We may use outside sources to display content on our site. This content may 
					contain cookies. While we may use cookies in other parts of our Web site, cookies received with such 
					content are collected by the content providers, and we do not have access to this information.</p>
				<p className={classes.body}>The information collected by Golden West Medical Center, P.C. (DBA Golden West 
					Weight Loss) on this site is not sold to any other companies or organizations. The information collected 
					by Golden West Medical Center, P.C. (DBA Golden West Weight Loss) on this site may be shared with other 
					companies or organizations involved in the transactions that you make. This includes, but is not limited 
					to billing and credit card processing services.</p>
				<div className={classes.subtitle}>Security</div>
				<p className={classes.body}>This site has security measures in place to protect the loss, misuse 
					and alteration of the information under our control.</p>
				<div className={classes.subtitle}>Choice/Opt-Out</div>
				<p className={classes.body}>Our site provides users the opportunity to opt-out of receiving 
					communications from us at the point where we request information about the visitor.</p>
				<p className={classes.body}>Please email admin@TucsonMedical.com to remove your 
					information from our database to not receive future communications or to no longer receive our service.</p>
				<div className={classes.subtitle}>Corrections / Update</div>
				<p className={classes.body}>Please email admin@TucsonMedical.com to change or modify information 
					previously provided.</p>
				<div className={classes.subtitle}>Contacting the Company Responsible for this Web Site</div>
				<p className={classes.body}>If you have any questions about this privacy statement, the practices of this 
					site, or your dealings with this site, you can contact Golden West Medical Center, P.C. (DBA Golden West 
					Weight Loss) via:</p>
					<div className={classes.subtitle}>Email</div>
				<div>info@TucsonMedical.com</div>
				<div className={classes.subtitle}>Mail</div>
				<div>Golden West Weight Loss</div>
				<div>230 W Ajo Way</div>
				<div>Tucson, Arizona 85713</div>
				<div className={classes.subtitle}>Phone</div>
				<div>(520) 792 - 1966)</div>
				<div className={classes.subtitle}>Fax</div>
				<div>(520) 628 - 8035)</div>

				<div className={classes.title2}>Terms of Use</div>
				<p className={classes.body}>Your use of this site constitutes your agreement to abide by these Terms of Use. 
					TucsonMedical.com is owned and operated by Golden West Medical Center, P.C. (DBA Golden West Weight Loss) 
					which reserves the right, in it's sole discretion, to modify, alter or otherwise update this policy at any 
					time. Visitors are encouraged to review this policy from time to time.</p>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) hereby grants 
					you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, 
					noncommercial and personal use only, one copy of any material and/or software that you may download from 
					this site, including, but not limited to, any files, codes, audio or images incorporated in or generated 
					by the software (collectively the "Downloaded Material") provided, however, that you must maintain all 
					copyright and other notices contained in such Downloaded Material. You acknowledge and agree that you may 
					not sublicense, assign or otherwise transfer this license or the Downloaded Material and that no title to 
					the Downloaded Material has been or will be transferred to you from Golden West Medical Center, P.C. (DBA 
					Golden West Weight Loss) or anyone else. You also agree that you will not alter, disassemble, decompile, 
					reverse engineer or otherwise modify the Downloaded Material.</p>
				<div className={classes.subtitle}>Disclaimers and Limitations on Liability</div>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) is not 
					responsible or liable for any infections or contamination of your system or delays, inaccuracies, errors, 
					or omissions arising out of your use of this site or with respect to any of the content or services of 
					this site. This site and all materials contained on it are distributed and transmitted "as is" without 
					warranties of any kind, either express or implied, including, without limitation, warranties of title or 
					implied warranties of merchantability or fitness for a particular purpose. The entire risk as to the 
					quality, accuracy, adequacy, completeness, correctness and validity of any material rests with you. Golden 
					West Medical Center, P.C. (DBA Golden West Weight Loss) is not responsible for any special, indirect, 
					incidental, or consequential damages that may result from the use of, or the inability to use, the materials 
					contained on this site whether the material is provided or otherwise supplied by TucsonMedical.com or anyone 
					else. Notwithstanding the foregoing, in no event shall Golden West Medical Center, P.C. (DBA Golden West 
					Weight Loss)'s total liability to you for any and all claims, damages, losses, and causes of action (whether 
					in contract or tort or otherwise) exceed the amount paid by you, if any, for accessing this site.</p>
					<div className={classes.subtitle}>Bulletin Boards, Chatrooms and Other Forums</div>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) is not responsible 
					for any material posted on any bulletin boards, chat rooms, or other forums conducted on this site 
					("Forums"), if any. You shall not upload, transmit, distribute or otherwise publish through such Forums any 
					content which: a) libels, defames, or is obscene, pornographic, abusive, or threatening; b) infringes any 
					intellectual property right of any entity or person, including, but not limited to violating anyone's 
					copyrights or trademarks; c) violates any law; d) advocates illegal activity; or e) advertises or otherwise 
					solicits funds or is a solicitation for goods or services. (collectively "Non- Approved Material").</p>
				<p className={classes.body}>You agree to indemnify Golden West Medical Center, P.C. (DBA Golden West Weight 
					Loss) for any and all claims, damages, losses, and causes of action arising out of your publication or 
					transmittal of Non-Approved Material or your failure to comply with these Terms of Use. While Golden West 
					Medical Center, P.C. (DBA Golden West Weight Loss) does not and cannot review every message posted by users 
					in the Forums and is not responsible for the content of these messages, Golden West Medical Center, P.C. (DBA 
					Golden West Weight Loss) reserves the right to delete, move, or edit messages that it, in its sole discretion, 
					ems abusive, defamatory, obscene, in violation of copyright or trademark laws, or otherwise unacceptable.</p>
					<div className={classes.subtitle}>Linked Sites and Linking Rights</div>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) explicitly grants 
					the right to any Internet service to link to any Golden West Weight Loss page with a ".html", ".shtml", or 
					a ".php" extension and to any Golden West Weight Loss forums page with a ".pl" or ".php" extension, so long 
					as the linking page does not place the Golden West Weight Loss page in a frame or alter its appearance in 
					any way. Golden West Medical Center, P.C. (DBA Golden West Weight Loss) forbids the linking to any file 
					stored on Golden West Weight Loss that does not have one of the above extensions.</p>
				<p className={classes.body}>There are links to third party web sites listed on some pages on this web site. 
					These web site links are listed as a convenience to our visitors. We have no control over the content of 
					third party sites. These links are for your convenience only and you access them at your own risk. If you use 
					hese links, we take no responsibility and give no guarantees, warranties or representations, implied or 
					otherwise, for the content or accuracy of these third-party sites.</p>
				<div className={classes.subtitle}>Personal Information</div>
				<p className={classes.body}>Personal information submitted by visitors may be used for marketing and 
					promotional purposes relating to the Golden West Weight Loss web site or other related properties, products 
					or events.</p>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) bears no 
					responsibility for any action or policies of any third parties who collect any information visitors may 
					disclose on the bulletin boards, chat areas or other public forums on this web site.</p>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) utilizes "cookies" 
					on this web site. A cookie is a piece of information that is transferred to a visitor's computer to enhance 
					the visitor experience on the web site (for example, each time a registered visitor returns to the web site 
					the cookie allows the visitor to be personally addressed and/or directed to his or her indicated preference 
					areas on the web site.) If visitors choose to, they have the option to set their browser so that they have 
					the ability to refuse cookies.</p>
				<p className={classes.body}>Golden West Medical Center, P.C. (DBA Golden West Weight Loss) requests that all 
					visitors to the web site that are under the age of 18 not disclose or provide any personal information on 
					this web site. We do not knowingly collect personal information from users under the age of 18. We will 
					delete this information if we determine a user is under the age of 18.</p>
				<div className={classes.subtitle}>Trademarks</div>
				<p className={classes.body}>Golden West Weight Loss and the Golden West Weight Loss logo are trademarks of 
					Golden West Medical Center, P.C. (DBA Golden West Weight Loss) All other trademarks, service marks and trade 
					names used on this web site are the property of their respective owners.</p>
				<div className={classes.subtitle}>Other</div>
				<p className={classes.body}>This site is controlled and operated by Golden West Medical Center, P.C. (DBA 
					Golden West Weight Loss) from its offices in the State of Arizona, United States of America. Golden West 
					Medical Center, P.C. (DBA Golden West Weight Loss) makes no representations that materials in this site are 
					appropriate or available for use in other locations. Those who choose to access this site from other locations 
					do so at their own risk and are responsible for compliance with any and all local laws, if and to the extent 
					local laws are applicable. No software from this site may be downloaded, exported or re-exported into (or to 
					a national or resident of) any countries that are subject to U.S. export restrictions.</p>
				<p className={classes.body}>This agreement shall be governed by, construed and enforced in accordance with 
					the laws of the State of Arizona, as it is applied to agreements entered into and to be performed entirely 
					within such State. Any action you bring to enforce this agreement or any matters related to this site shall 
					be brought in either the State or Federal Courts located in Pima County, Arizona. If any provision of this 
					agreement is void or unenforceable in whole or in part, the remaining provisions of this agreement shall 
					not be affected thereby.</p>
				<p className={classes.body}>Questions regarding this agreement or any of our policies should be directed 
					to policies@TucsonMedical.com</p>
				<p className={classes.body}>If you cannot abide by these terms and policies and are unwilling to accept 
					full responsibility for your actions, you may not use any part of this web site.</p>
				<TextAndLine 
					withoutBorder
					text={
						<span>Your feedback and suggestions are always welcome Please email us at 
							<span style={{fontWeight: 600}}> suggestions@TucsonMedical.com</span>
						</span>
					}
				/>
      </div>
		</>
	)
}
