<template>
	<Page class="page"  backgroundSpanUnderStatusBar="false">

		<ActionBar backgroundColor="#44557f" flat="true">
            <StackLayout orientation="vertical" width="100%" height="5%"
                backgroundColor="#44557f">
            </StackLayout>
        </ActionBar>
		<!-- <ActionBar flat="true" backgroundColor="#FFFFFF" color="#000000">
		</ActionBar> -->

		<GridLayout orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto" :marginTop='isIOS ? "-20" : ""'>

			<StackLayout col="0" row="0" backgroundColor="#f8f8f8">
				<GridLayout id="detail-page-background" columns="*" rows="auto,*,auto" height="200">
					<GridLayout columns="auto,*,auto" rows="auto" col="0" row="0">
						<Image col="0" row="0" marginLeft="20" marginTop="10" height="25" width="35" backgroundImage="~/assets/media/placeholder1.jpeg"></Image>
						<Button col="2" row="0" class="btn btn-rounded-sm" padding="5" textTransform="none"
												backgroundColor="#FFFFFF" color="#3b75ff" text="Brought to your by Ethan"
												fontSize="12" height="25"></Button>
								</GridLayout>
								<GridLayout columns="auto,*,auto" rows="auto" col="0" row="2"
										marginBottom="20">
										<Label col="0" row="0" class="font-weight-bold" paddingLeft="20"
												fontSize="30" color="#FFFFFF" text="Weekly Recaps"></Label>
										<Image col="2" row="0" marginRight="10" height="45" width="45"
												src="~/assets/media/placeholder1.jpeg"></Image>
								</GridLayout>
						</GridLayout>

						<Label class="font-weight-bold" marginTop="10" paddingLeft="10" fontSize="20" color="#333333" text="Weekly Recaps"></Label>

						<ListView class="list-group" for="item in listViewData" :key="index" height="500" backgroundColor="#F0F0F0">
							<v-template>
								<GridLayout orientation="horizontal" class="list-group-item"
												rows="auto" columns="auto,*,auto">
												<Image col="0" row="0" :src="item.imageUrl" height="75"
														width="75"></Image>
												<StackLayout col="1" row="0" marginLeft="15">
														<Label marginTop="5" paddingRight="5" :text="item.title"
																class="list-group-item-heading font-weight-bold"
																color="#333333"></Label>
														<Label marginTop="5" :text="item.author" color="#999999"></Label>
														<Label marginTop="5" :text="item.description" color="#999999"></Label>
												</StackLayout>
												<!-- <Label col="2" row="0" horizontalAlignment="right" color="#b9b9b9"
														fontSize="24" paddingRight="5" class="fa" > {{ 'fa-ellipsis-v' | fonticon }} </Label> -->
                                                        <Image  src="~/assets/icons/Arrow-right.png" col="2" row="0" horizontalAlignment="right" color="#b9b9b9"
														fontSize="24" paddingRight="5" class="fa" height="45" width="45"></Image>
								</GridLayout>
							</v-template>
						</ListView>
								
				</StackLayout>

                <!-- <NavBar col="0" row="1"></NavBar> -->
				
				<!-- <StackLayout col="0" row="1" orientation="horizontal" backgroundColor="#FFFFFF"
						height="60">
						<GridLayout rows="*" columns="*,*,*,*,*">
								<Image col="0" row="0" (tap)="onButtonTap()" height="25" width="25"
										margin="10" src="~/assets/images/shape2@3x.png"></Image>
								<Image col="1" row="0" (tap)="onButtonTap()" height="25" width="25"
										margin="10" src="~/assets/images/shape1@3x.png"></Image>
								<Image col="2" row="0" (tap)="onButtonTap()" height="60" width="60"
										margin="10" src="~/assets/images/home@3x.png"></Image>
								<Image col="3" row="0" (tap)="onButtonTap()" height="25" width="25"
										margin="10" src="~/assets/images/shape3@3x.png"></Image>
								<Image col="4" row="0" (tap)="onButtonTap()" height="25" width="25"
										margin="10" src="~/assets/images/icon04@3x.png"></Image>
						</GridLayout>
				</StackLayout> -->


		</GridLayout>

	</Page>
</template>

<script>
import { isIOS, isAndroid } from 'tns-core-modules/platform'
// import NavBar from '../shared/Navbar';

export default {
	created() {
		console.log('is IOS platform: ' + isIOS)
		console.log('is Android platform: ' + isAndroid)
	},
	data() {
		return {
			// isIOS: false,
			listViewData: [
			{
					title: "Week 1",
					author: "Ethan, TJ", 
					description: "A Weekly recap about the fantasy events that happend during week 1",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
			{
					title: "Week 2",
					author: "Ethan, N8o", 
					description: "A Weekly recap about the fantasy events that happend during week 2",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
			{
					title: "Week 3",
					author: "N8o",
					description: "A Weekly recap about the fantasy events that happend during week 3",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
			{
					title: "Week 4",
					author: "Ethan, TJ", 
					description: "A Weekly recap about the fantasy events that happend during week 4",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
			{
					title: "Week 5",
					author: "Ethan, TJ", 
					description: "A Weekly recap about the fantasy events that happend during week 5",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
			{
					title: "Week 6",
					author: "Ethan, TJ", 
					description: "A Weekly recap about the fantasy events that happend during week 6",
					imageUrl: "~/assets/media/placeholder4.jpg"
			},
	]
		}
	},
	methods: {
		onItemTap(){

		}
	},
	
	};
</script>
<style scoped>
/* ActionBar{
  background-color:transparent;
} */

#detail-page-background{        
  background-image: url("~/assets/media/placeholder1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>