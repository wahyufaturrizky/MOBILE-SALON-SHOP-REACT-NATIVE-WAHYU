import React, {Component} from 'react';
import Carousel from 'react-native-banner-carousel';
import { 
  Image, 
  ScrollView, 
  StyleSheet, 
	View,
	Text,
  TouchableOpacity,
  Dimensions  } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
  "../../../assets/img/barberBanner01.jpg",
  "../../../assets/img/barberBanner02.jpg",
  "../../../assets/img/barberBanner03.jpg"
];

import { 
  Colors } from 'react-native/Libraries/NewAppScreen';

import Divider from '../../../components/atoms/Divider';
import TitleDesc from '../../../components/atoms/TitleDesc';
import CardCommentUser from '../../../components/molecules/CardCommentUser';
import GoogleMap from '../../../components/molecules/GoogleMap';
import MenuDailyDeals from '../../../components/molecules/MenuDailyDeals';
import MenuTreatment from '../../../components/molecules/MenuTreatment';
import ResultTransaction from '../../../components/molecules/ResultTransaction';
import NameShop from '../../../components/molecules/NameShop';
import TextDesc from '../../../components/molecules/TextDesc';
import TextCaptions from '../../../components/molecules/TextCaptions';
import DiscountHours from '../../../components/molecules/DiscountHours';

export default class Home extends Component {

	renderPage(image, index) {
		return (
				<View key={index}>
						<Image style={{ width: BannerWidth, height: BannerHeight }} source={require("../../../assets/img/barberBanner02.jpg",)} />
						<View style={{width: '100%', height: 280, borderRadius: 4, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
				</View>
		);
	}
    render(){
        return(
            // Start Layout
            <View style={styles.layout}>
							{/* Start Scroll View All Content */}
							<ScrollView style={styles.scrollView}>

								{/* Start Carousel Hero Banner */}
								<Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
          			<Image source={require('../../../assets/icon/back.png')} style={{width: 31, height: 31, position: 'absolute', left: 16, top: 16}} />
          			<Image source={require('../../../assets/icon/heart.png')} style={{width: 31, height: 31, position: 'absolute', right:16, top: 16}} />
          			<Image source={require('../../../assets/icon/share.png')} style={{width: 31, height: 31, position: 'absolute', right:60, top: 16}} />
								{/* End Carousel Hero Banner */}

                {/* Start Main Content Here */}
                <View style={styles.container}>

									{/* Start Component Name Shop */}
									<NameShop styleCardMenu={styles.cardMenu} imgFav={require('../../../assets/icon/locationShop.png')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} nameShop='Kit & Kito Salon' dateReview='14 Nov 2019' />
									{/* End Component Name Shop */}

									{/* Start Component All Menu Treatment */}
									<View style={{height: 130}}>
										<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
											<View style={styles.menuCategory}>

												<MenuTreatment textBig={styles.textBig} style={styles.menuKiriActiveTreatment}  nameTreatment="Hair"  />
												<MenuTreatment textBig={styles.textSmallNonActive} style={styles.menuTreatment} nameTreatment ="Nail"  />
												<MenuTreatment textBig={styles.textSmallNonActive} style={styles.menuTreatment} nameTreatment ="Face"  />
												<MenuTreatment textBig={styles.textSmallNonActive} style={styles.menuTreatment} nameTreatment ="Message"  />
												<MenuTreatment textBig={styles.textSmallNonActive} style={styles.menuTreatment} nameTreatment ="Neo Cell"  />
												<MenuTreatment textBig={styles.textSmallNonActive} style={styles.menuKananTreatment} nameTreatment ="Bleaching"  />

											</View>								

										</ScrollView>
									</View>
									{/* End Component All Menu Treatment */}

									{/* Start Component Daily Deals */}
									<TitleDesc TitleDesc="Daily Deals"/>
									<View style={{height: 130}}>
										<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
											<View style={styles.menuCategory}>

												<MenuDailyDeals textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menuKiriActive}  Day="FRI" Date="22" Month="OCT" />
												<MenuDailyDeals textBig={styles.textBigNonActive} textSmall={styles.textSmallNonActive} style={styles.menuDaily} Day="FRI" Date="23" Month="OCT" />
												<MenuDailyDeals textBig={styles.textBigNonActive} textSmall={styles.textSmallNonActive} style={styles.menuDaily} Day="SAT" Date="24" Month="OCT" />
												<MenuDailyDeals textBig={styles.textBigNonActive} textSmall={styles.textSmallNonActive} style={styles.menuDaily} Day="SUN" Date="25" Month="OCT" />
												<MenuDailyDeals textBig={styles.textBigNonActive} textSmall={styles.textSmallNonActive} style={styles.menuDaily} Day="MON" Date="26" Month="OCT" />
												<MenuDailyDeals textBig={styles.textBigNonActive} textSmall={styles.textSmallNonActive} style={styles.menuKananDaily} Day="TUE" Date="27" Month="OCT" />

											</View>								

										</ScrollView>
									</View>
									{/* End Component Daily Deals */}

									{/* Start Component Time Discount Hours */}
									<View style={{height: 130}}>
										<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
											<View style={styles.menuCategory}>

												<DiscountHours textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menuKiri}  time="12:00pm" discount="-45%" />
												<DiscountHours textBig={styles.textBigActive} textSmall={styles.textSmallActive} style={styles.menuActive} time="01:00pm" discount="-55%" />
												<DiscountHours textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menu} time="01:00pm" discount="-55%" />
												<DiscountHours textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menu} time="02:00pm" discount="-55%" />
												<DiscountHours textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menu} time="03:00pm" discount="-55%" />
												<DiscountHours textBig={styles.textBig} textSmall={styles.textSmall} style={styles.menuKanan} time="4:00pm" discount="-45%" />

											</View>								

										</ScrollView>
									</View>
									{/* End Component Time Discount Hours */}

								{/* Component Title Desc. and Sub Title Desc. */}
								<TextDesc links="read more" TitleDesc="Provider's Condition" SubTitleDesc="Promotion discount applied to all services except blow and dry and directors cut. All services includes wash and blow. We will hold the appointment for 15..." />

								{/* Component Title Desc. and Sub Title Desc. */}
								<TextDesc links="www.kitandkitosalon.com/menu" TitleDesc="View the menu" SubTitleDesc="📖" />

								{/* Component Title Desc. and Sub Title Desc. */}
								<TextDesc links="read more" TitleDesc="About" SubTitleDesc="Living up to our name Kit and Kito, the team is highly energetic and creative. We believe that if it matters to you, it matters to us, Keeping up to speed with the market’s latest trends. Kit & Kito Salon recognizes the need for constant improvement. Our team receives regular training from haridressers all around the..." />

										{/* Component Google Map */}
                    <GoogleMap style={styles.banner} img={require('../../../assets/img/googleMap.png')}/>

										{/* Start All Component Icon and Information about the Shop */}
										<View>

										{/* Component Icon and information about the Shop */}
                    <TextCaptions linking={styles.textNotLink} textIcon="⛪" textCapt="03-13, Bugis Junction, 200 Victoria St Singapore 188021"/>

										{/* Component Divider */}
										<Divider styleBatas={styles.batas} />

										{/* Component Icon and information about the Shop */}
                    <TextCaptions linking={styles.textLink} textIcon="⏰" textCapt="11am - 9.30pm (Today)"/>

										{/* Component Divider */}
										<Divider styleBatas={styles.batas} />
										
										{/* Component Icon and information about the Shop */}
                    <TextCaptions linking={styles.textLink} textIcon="📞" textCapt="+65 6644 9876"/>
										
										{/* Component Divider */}
										<Divider styleBatas={styles.batas} />
										
										{/* Component Icon and information about the Shop */}
                    <TextCaptions linking={styles.textLink} textIcon="💻" textCapt="www.kitandkitosalon.com"/>
										
										{/* Component Divider */}
										<Divider styleBatas={styles.batas} />

										{/* Component Icon and information about the Shop */}
                    <TextCaptions linking={styles.textNotLink} textIcon="💳" textCapt="Credit Cards, Fave Pay, Grab Pay, and Cash accepted"/>

										</View>
										{/* End All Component Icon and Information about the Shop */}
										
                    {/* Divider */}
                    <Divider styleBatas={styles.batas} />

										{/* Start Component All Reviews and Rating */}
										<View style={{justifyContent: "space-between",flexDirection: "row", marginBottom: 28, width: "100%"}}>
											<Text style={{fontSize: 20, fontWeight: "bold"}}>Reviews (54)</Text>
											<Text style={{color: "#FF3464", fontSize: 20, fontWeight: "bold"}}>★★★<Text style={{color: "#616161"}}>★★</Text></Text>
										</View>
										{/* End Component All Reviews and Rating */}

										{/* Component Card Comment other User */}
                    <CardCommentUser styleCardMenu={styles.cardMenu} imgFav={require('../../../assets/icon/user.jpg')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} nameUser='Faiz' dateReview='14 Nov 2019' />

										{/* Component Button */}
										<TouchableOpacity style={{marginTop: 48, marginBottom: 24, borderRadius: 4, width: "100%", borderColor: "#FF3464", borderWidth: 2, backgroundColor: "white", paddingHorizontal: 8, paddingVertical: 8, alignItems: 'center'}}>
											<Text style={{fontSize: 18, color: '#FF3464'}}>View all reviews</Text>
										</TouchableOpacity>

										{/* Divider */}
                    <Divider styleBatas={styles.batas} />

										{/* Component Result Transaction based on Treatment */}
										<ResultTransaction imgFav={require('../../../assets/icon/label.jpg')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} resultDiscounts='55%' resultTime='12:00pm' styleresultTime={styles.TextLink} styleresultDiscounts={styles.TextLink}/>
                </View>
                
                </ScrollView>
								{/* End Scroll View All Content */}

            </View>

            // End Layout
        )
    }
}

const styles = StyleSheet.create({
layout: {
		backgroundColor: 'white',
		flex: 1,
	},
	container: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		paddingTop: 14,
		flexWrap: "wrap",
		paddingHorizontal: 14
	},
	navBar: {
		borderTopWidth: 2,
		borderColor: '#dcdcdc',
		backgroundColor: 'white',
		height: 56,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center",
	},
	navBarMenu: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 2,
		marginHorizontal: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	navBarMenuKiri: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 2,
		marginHorizontal: 4,
		marginLeft: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	navBarMenuKanan: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 2,
		marginHorizontal: 4,
		marginRight: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	CardDesc: {
		color: '#999999',
		fontSize: 10,
		marginBottom: 4,
		marginLeft: 8,
	},
	menuTitle: {
		color: '#999999',
		fontSize: 8,
		marginTop: 4,
	},
	textSmallNonActive: {
		color: "#616161",
	},
	textBigNonActive: {
		color: "#616161", 
		fontWeight: "bold", 
		fontSize: 24
	},
	textSmall: {
		color: "#FF3464",
	},
	textBig: {
		color: "#FF3464", 
		fontWeight: "bold", 
		fontSize: 24
	},
	textSmallActive: {
		color: "white",
	},
	textBigActive: {
		color: "white", 
		fontWeight: "bold", 
		fontSize: 24
	},
	cardTitle: {
		color: 'black',
		fontSize: 16,
		textAlign: "left",
		fontWeight: '600',
	},
	card: {
		height: 20,
		width: '100%',
		borderRadius: 4,
		flexDirection: 'row',
		marginBottom: 14,
	},
	cardMenu: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 14,
		alignItems: "center",
		justifyContent: "center",
	},
	cardImage: {
		backgroundColor: 'white',
		height: 90,
		flex: 2,
		borderRadius: 4,
		marginLeft: 0,
		marginHorizontal: 4,
		alignItems: "center",
		justifyContent: "center"
	},
	cardDesc: {
		backgroundColor: 'white',
		height: 90,
		flex: 6,
	},
	cardTag: {
		backgroundColor: 'white',
		height: 90,
		flex: 2,
		borderRadius: 4,
		marginRight: 0,
	},
	Fav: {
		marginTop: 0,
		marginRight: 0,
		height: 45,
		width: 45,
	},
	batas: {
		backgroundColor: 'white',
		borderColor: '#F8F8F8',
		borderBottomWidth: 2,
		height: 10,
		width: '100%',
		borderRadius: 4,
		flexDirection: 'row',
		marginBottom: 14,
		alignItems: "center",
		justifyContent: "center",
	},
	textLink: {
		color: "#FF3464"
	},
	textNotLink: {
		color: "#797979"
	},
	banner: {
		backgroundColor: 'white',
		borderColor: '#dcdcdc',
		borderWidth: 2,
		height: 200,
		width: '100%',
		borderRadius: 4,
		marginBottom: 14,
		alignItems: "center",
		justifyContent: "center",
	},
	menuCategory: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 4,
		flexDirection: 'row',
		marginBottom: 14,
		alignItems: "center",
		justifyContent: "center",
	},
	menuKiriActive: {
		backgroundColor: 'white',
		borderColor: '#FF3464',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		marginLeft: 0,
		marginHorizontal: 4,
		paddingHorizontal: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	menuKiriActiveTreatment: {
		backgroundColor: 'white',
		borderColor: '#FF3464',
		borderBottomWidth: 4,
		height: 80,
		flex: 1,
		borderRadius: 15,
		marginLeft: 0,
		marginHorizontal: 4,
		paddingHorizontal: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	menuTreatment: {
		backgroundColor: 'white',
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	menuKiri: {
		backgroundColor: 'white',
		borderColor: '#dcdcdc',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		marginLeft: 0,
		marginHorizontal: 4,
		paddingHorizontal: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	menuKanan: {
		backgroundColor: 'white',
		borderColor: '#dcdcdc',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginRight: 0,
		marginHorizontal: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	menuKananTreatment: {
		backgroundColor: 'white',
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginRight: 0,
		marginHorizontal: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	menu: {
		backgroundColor: 'white',
		borderColor: '#dcdcdc',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	menuKananDaily: {
		backgroundColor: '#F8F8F8',
		borderColor: '#F8F8F8',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginRight: 0,
		marginHorizontal: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	menuDaily: {
		backgroundColor: '#F8F8F8',
		borderColor: '#F8F8F8',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	menuActive: {
		backgroundColor: '#FF3464',
		color: "white",
		borderColor: '#dcdcdc',
		borderWidth: 2,
		height: 80,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 2,
		marginHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		backgroundColor: Colors.white,
	},
	highlight: {
		fontWeight: '700',
	},
});

