<template>
    <Page class="page">

        <ActionBar backgroundColor="black">
            <Label class="action-bar-title" color="white" text="Fantasy Podcasts"></Label>
        </ActionBar>


        <GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">

            <StackLayout col="0" row="0" backgroundColor="#f8f8f8">
                <StackLayout backgroundColor="#44557f" paddingBottom="15"
                    marginTop="-10">
                    <!-- <Label text="Fantasy Podcasts" class="font-weight-bold"
                        color="#FFFFFF" padding="15" fontSize="24"></Label> -->
                        <GridLayout columns="auto,*,auto" rows="auto,auto"
                            col="0" row="2" marginBottom="5">
                            <Label col="0" row="0" class="font-weight-bold"
                                fontSize="18" color="#FFFFFF" text="Call Your Moms Podcast"></Label>
                            <Label col="0" row="1" class="font-weight-bold"
                                fontSize="16" color="#FFFFFF" text="By Ethan Waite"></Label>
                        </GridLayout>
                </StackLayout>

                <ScrollView orientation="vertical">
                    <StackLayout>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label col="0" row="0" class="font-weight-bold"
                                paddingLeft="10" fontSize="20" color="#000000"
                                text="Off-Season Jabber"></Label>
                            <Label col="2" row="0" class="font-weight-bold"
                                marginRight="20" fontSize="14" color="#8d8d8d"
                                text="View All (14)" @tap="showDetails()"></Label>
                        </GridLayout>


                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10" @tap="openPlayer()">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                        <Button horizontalAlignment="right"
                                            marginRight="5" marginTop="80"
                                            width="50" height="20" class="fa btn-rounded-sm"
                                            color="#FFFFFF" backgroundColor="#3b75ff">New</Button>
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Matt King's Demise"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                        <Button horizontalAlignment="right"
                                            marginRight="5" marginTop="80"
                                            width="50" height="20" class="fa btn-rounded-sm"
                                            color="#FFFFFF" backgroundColor="#3b75ff">New</Button>
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 2"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                        <!-- <Button horizontalAlignment="right"
                                            marginRight="5" marginTop="80"
                                            width="50" height="20" class="fa btn-rounded-sm"
                                            color="#FFFFFF" backgroundColor="#3b75ff">{{ 'fa-star' | fonticon }}4.9</Button> -->
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 3"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 4"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 5"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 6"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 7"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

              
                            </StackLayout>
                        </ScrollView>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label col="0" row="0" class="font-weight-bold"
                                paddingLeft="10" fontSize="20" color="#000000"
                                text="Weekly Recaps"></Label>
                            <Label col="2" row="0" class="font-weight-bold"
                                marginRight="20" fontSize="14" color="#8d8d8d"
                                text="View All (16)"></Label>
                        </GridLayout>


                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                        <!-- <Button horizontalAlignment="right"
                                            marginRight="5" marginTop="80"
                                            width="50" height="20" class="fa btn-rounded-sm"
                                            color="#FFFFFF" backgroundColor="#3b75ff">{{ 'fa-star' | fonticon }}4.9</Button> -->
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 1"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 2"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 3"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 4"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 5"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 6"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 7"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

              
                            </StackLayout>
                        </ScrollView>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label col="0" row="0" class="font-weight-bold"
                                paddingLeft="10" fontSize="20" color="#000000"
                                text="Misc. Other"></Label>
                            <Label col="2" row="0" class="font-weight-bold"
                                marginRight="20" fontSize="14" color="#8d8d8d"
                                text="View All (6)"></Label>
                        </GridLayout>


                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 1"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 2"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 3"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>
                                
                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 4"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 5"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 6"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

                                <StackLayout margin="10">
                                    <StackLayout class="album-image" height="110"
                                        width="125" backgroundImage="~/assets/media/placeholder2.jpg"
                                        borderRadius="5">
                                    </StackLayout>
                                    <Label fontSize="14" class="font-weight-bold"
                                        color="#000000" text="Week 7"></Label>
                                    <Label fontSize="12" color="#999999" text="2019"></Label>
                                </StackLayout>

              
                            </StackLayout>
                        </ScrollView>

                        


                    </StackLayout>
                </ScrollView>
            </StackLayout>

            <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
                <StackLayout col="0" row="1" orientation="horizontal"
				backgroundColor="#FFFFFF" height="60">
					<GridLayout rows="*" columns="*,*,*,*,*">
						<Image col="0" row="0" @tap="navToMembers()" height="25"
							width="25" margin="10" src="~/assets/icons/nav-users.png"></Image>
						<Image col="1" row="0" @tap="onButtonTap()" height="25"
							width="25" margin="10" src="~/assets/icons/nav-stats.png"></Image>
						<Image col="2" row="0" @tap="navToHome()" height="25"
							width="25" margin="10" src="~/assets/icons/nav-home.png"></Image>
						<Image col="3" row="0" @tap="onButtonTap()" height="25"
							width="25" margin="10" src="~/assets/icons/nav-file-text.png"></Image>
						<Image col="4" row="0" @tap="onButtonTap()" height="40"
							width="40" margin="10" src="~/assets/icons/nav-music.png"></Image>
					</GridLayout>
				</StackLayout>
            </StackLayout>

        </GridLayout>
    </page>
</template>
<script>
    import Details from "./Details";
    import Members from '../members/Index'
    import Home from "../Home";
    import Player from "./Player"

    export default {
        computed: {},
        mounted() {},
        data() {
            return {};
        },
        methods: {
            onButtonTap() {},
            showDetails() {
                this.$navigateTo(Details, {
                    animated: true,
                    transition: {
                        name: "slideLeft",
                        duration: 250,
                        curve: "easeIn"
                    }
                });
            },
            openPlayer() {
                console.log("navToPlayer Button was pressed");
                this.$navigateTo(Player, {
                    animated: true,
                    transition: {
                        name: "slideLeft",
                        duration: 250,
                        curve: "easeIn"
                    }
                });
            },
            navToMembers() {
				console.log("navToMembers Button was pressed");
				this.$navigateTo(Members, {
					transition: {
						name: "slideLeft",
						duration: 250,
						curve: "easeIn"
					}
				});
			},
            navToHome() {
				this.$navigateTo(Home, {
					transition: {
						name: "slideLeft",
						duration: 250,
						curve: "easeIn"
					}
				});
			},
        }
    };
</script>

<style scoped>
    ActionBar {
        background-color: transparent;

    }

    .album-image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    #searchRow {
        margin-top: 20;
    }
    
</style>