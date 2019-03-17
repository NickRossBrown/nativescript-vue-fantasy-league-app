<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

          <GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">

            <StackLayout col="0" row="0" backgroundColor="#f8f8f8">
                <StackLayout backgroundColor="#44557f" paddingBottom="15"
                    marginTop="-10">
                    <Label text="Call Your Moms Fantasy League" class="font-weight-bold"
                        color="#FFFFFF" padding="15" fontSize="24"></Label>
                </StackLayout>

                <StackLayout paddingLeft="20" paddingRight="20" paddingTop="20"
                    paddingBottom="5" marginTop="-20" backgroundImage="~/assets/media/placeholder1.jpeg"
                    borderRadius="5" height="180" width="90%"
                    stretch="aspectFit" class="album-image">
                    <GridLayout columns="*" rows="auto,*,auto" height="100%">

                        <GridLayout columns="auto,*,auto" rows="auto,auto"
                            col="0" row="2" marginBottom="5">
                            <Label col="0" row="0" class="font-weight-bold"
                                fontSize="18" color="#FFFFFF" text="Fantasy League"></Label>
                            <Label col="0" row="1" class="font-weight-bold"
                                fontSize="16" color="#FFFFFF" text="Fantasy League"></Label>
                        </GridLayout>

                    </GridLayout>

                </StackLayout>

                <ScrollView orientation="vertical">
                    <StackLayout>

                    </StackLayout>
                </ScrollView>
            </StackLayout>

            <StackLayout col="0" row="1" orientation="horizontal"
            backgroundColor="#FFFFFF" height="60">
                <GridLayout rows="*" columns="*,*,*,*,*">
                    <Image col="0" row="0" @tap="navToMembers()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-users.png"></Image>
                    <Image col="1" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-stats.png"></Image>
                    <Image col="2" row="0" @tap="onButtonTap()" height="50"
                        width="50" margin="10" src="~/assets/icons/nav-home.png"></Image>
                    <Image col="3" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-file-text.png"></Image>
                    <Image col="4" row="0" @tap="navToPodcasts()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-music.png"></Image>
                </GridLayout>
            </StackLayout>

        </GridLayout>

        <!-- <GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <FormattedString>
                    <Span class="fa" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>

            <StackLayout col="0" row="1" orientation="horizontal" height="60" >
            </StackLayout>
        </GridLayout> -->
    </Page>
</template>

<script>
    import Members from '~/components/members/Index.vue'
    import Podcasts from '~/components/podcast/Index.vue'

    export default {
        computed: {
            message() {
                return "league announcements here";
            }
        },
        methods: {
			onButtonTap() {
				console.log("Button was pressed");
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
            navToPodcasts() {
				this.$navigateTo(Podcasts, {
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

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;

        opacity: 0;
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.1s;
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
</style>
