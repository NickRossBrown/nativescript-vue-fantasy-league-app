<template>
    <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">

        <GridLayout class="window" #bg>
            <ScrollView scrollBarIndicatorVisible="false">
                <StackLayout>
                    <Label row="0" col="1" text="h" class="icoPB" fontSize="28"
                        horizontalAlignment="center" margin="25" @tap="$navigateBack()"></Label>
                    <Image row="0" col="0" src="~/assets/images/camila-songs/1.png"
                        width="300" height="300" borderRadius="10"></Image>
                    <Label text="Week One" class="song-title mt"
                        fontWeight="400" padding="40 0 30 0"
                        horizontalAlignment="center"></Label>
                    <GridLayout columns="*, *" rows="auto, auto" margin="0 40">
                        <GridLayout col="0" row="0" columns="*" rows="auto"
                            colSpan="2">
                            <GridLayout col="0" row="0" horizontalAlignment="center"
                                verticalAlignment="center" class="time-line"></GridLayout>
                            <GridLayout col="0" row="0" horizontalAlignment="left"
                                verticalAlignment="center" class="time-passed"></GridLayout>
                            <GridLayout col="0" row="0" horizontalAlignment="left"
                                verticalAlignment="center" class="time-indicator"></GridLayout>
                        </GridLayout>
                        <Label row="1" col="0" text="0:55" class="sfl fw100 w"
                            fontSize="13" horizontalAlignment="left"></Label>
                        <Label row="1" col="1" text="2:54" class="sfl fw100 w"
                            fontSize="13" horizontalAlignment="right"></Label>
                    </GridLayout>
                    <GridLayout columns="*, *, *, *, *" rows="100" padding="20 15 10 19">
                        <Label verticalAlignment="center" row="0" col="0"
                            text="f" class="icoPB" fontSize="" textAlignment="center"></Label>
                        <Label verticalAlignment="center" row="0" col="1"
                            text="b" class="icoPB bt1" padding="15 0"
                            fontSize="20" marginRight="20" textAlignment="center"></Label>
                        <Label verticalAlignment="center" row="0" col="2"
                            text="d" class="icoPB bt2" padding="20 0"
                            fontSize="32" textAlignment="center"></Label>
                        <Label verticalAlignment="center" row="0" col="3"
                            text="a" class="icoPB bt3" padding="15 0"
                            fontSize="20" marginLeft="20" textAlignment="center"></Label>
                        <Label verticalAlignment="center" row="0" col="4"
                            text="e" class="icoPB" fontSize="" textAlignment="center"></Label>
                    </GridLayout>

              
      
        
                </StackLayout>
            </ScrollView>
        </GridLayout>


    </Page>
</template>

<script>
    export default {
        created() {},
        data() {
            return {};
        },
        methods: {
            onItemTap() {
                console.log("go to player");
            }
        }
    };
</script>
<style scoped>
    .song-title {
        font-size: 18;
        letter-spacing: 0.2px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 100;
    }

    .time-line {
        width: 100%;
        padding: 0 30;
        height: 2;
        border-top-color: rgba(180, 180, 180, 0.5);
        border-top-width: 2;
    }

    .time-passed {
        width: 60;
        padding: 0 30;
        height: 2;
        border-top-color: rgba(255, 255, 255, 1);
        border-top-width: 2;
    }

    .time-indicator {
        width: 18;
        height: 18;
        border-radius: 10;
        background-color: #fff;
        margin-left: 60;
    }

    .window {
        /* border-top-right-radius: 15;
    border-top-left-radius: 15; */
        background-image: url("~/assets/images/playerbg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .border-b {
        border-bottom-width: 1px;
        border-bottom-color: #fff;
        margin: 0 15;
        opacity: 0.3;
    }

    .bt1 {
        background-image: url("~/assets/images/B1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .bt2 {
        background-image: url("~/assets/images/B2.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .bt3 {
        background-image: url("~/assets/images/B3.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>