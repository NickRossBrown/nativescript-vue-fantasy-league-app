<template>
	<Page class="page" actionBarHidden="true">
		<StackLayout id="overview">
			<FlexboxLayout flexDirection="column" height="100%" width="100%">
				<StackLayout flexGrow="1" id="view">
					<FlexboxLayout flexDirection="column" maxHeight="100%">
						<StackLayout orientation="vertical" margin="0 50 0">
							<Label textWrap="true" text="League Members" class="h1 extra-bold"/>
							<Label
								textWrap="true"
								text="scroll to view them all"
								class="h3 description-label semi-bold"
							/>
						</StackLayout>
						<ScrollView
							orientation="horizontal"
							marginTop="24"
							height="calc(100% - 50)"
							v-on:scroll="getScroll"
							ref="list"
						>
							<WrapLayout
								orientation="horizontal"
								:paddingLeft="((width-344)/2)+8"
								:paddingRight="((width-344)/2)-8"
								paddingBottom="8"
							>
								<Card
									v-for="(member,index) in members"
									:key="index"
									:member="member"
									:index="index"
									:active="active"
									width="344"
									height="515"
								/>
							</WrapLayout>
						</ScrollView>
					</FlexboxLayout>
				</StackLayout>
			</FlexboxLayout>
		</StackLayout>
	</Page>
</template>

<script>
	import Member from "./Member";
	import Card from "./Card";

	const platform = require("tns-core-modules/platform");

	export default {
		data() {
			return {
				canBack: true,
				page: Member,
				width: 0,
				active: 0,
				members: [
					{
						name: "Nathan Armon",
						motto: "you dont even know real football knowledge",
						bestFinnish: "last",
						stars: 4,
						media: "placeholder4.jpg"
					},
					{
						name: "Ethan Waite",
						motto: "Happy to not get last",
						bestFinnish: "1st",
						stars: 4,
						media: "placeholder1.jpeg"
					},
					{
						name: "Thomas BillandGirl",
						motto: "Architecture",
						bestFinnish: "last",
						stars: 4,
						media: "placeholder2.jpg"
					},
					{
						name: "Tough Guy",
						motto: "Architecture",
						bestFinnish: "last",
						stars: 5,
						media: "placeholder3.jpeg"
					},
					{
						name: "J Cole",
						motto: "Architecture",
						bestFinnish: "last",
						stars: 4,
						media: "placeholder4.jpg"
					},
					{
						name: "Golden Taite",
						motto: "Architecture",
						bestFinnish: "last",
						stars: 5,
						media: "Theater.jpg"
					},
					{
						name: "Stroodle Boots",
						motto: "ada NIck Brown",
						bestFinnish: "1st",
						stars: 4,
						media: "Cathedral.jpg"
					},
					{
						name: "Animal",
						motto: "Do I get money for my team doing well even though im not in the playoffs?",
						bestFinnish: "last",
						stars: 5,
						media: "Theater.jpg"
					}
				]
			};
		},

		mounted() {
			this.width = platform.screen.mainScreen.widthDIPs;
		},

		methods: {
			onButtonTap() {
				console.log("Button was pressed");
			},

			getScroll(e) {
				this.active = Math.round(e.scrollX / 344);
			}
		},

		components: {
			Card
		}
	};
</script>

<style scoped>
	#sstar {
		opacity: 0;
		animation-name: fadeInUp;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		animation-delay: 0.1s;
	}

	#overview #view {
		opacity: 0;
		animation-name: fadeInRight;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		animation-delay: 0.5s;
	}

	#overview .h1 {
		color: #545454;
		font-size: 40;
		margin-bottom: 5;
		opacity: 0;
		animation-name: fadeInDown;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		animation-delay: 0.5s;
	}

	#overview .description-label {
		color: #dadada;
		opacity: 0;
		animation-name: fadeInUp;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		animation-delay: 0.75s;
	}

	#view {
		vertical-align: center;
	}
</style>