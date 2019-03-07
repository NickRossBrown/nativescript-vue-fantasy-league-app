<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <FormattedString>
                    <Span class="fa" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
            <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
                <GridLayout rows="*" columns="*,*,*,*,*">
                    <Image col="0" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-home.png"></Image>
                    <Image col="1" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-home.png"></Image>
                    <Image col="2" row="0" @tap="onButtonTap()" height="60"
                        width="60" margin="10" src="~/assets/icons/nav-home.png"></Image>
                    <Image col="3" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-home.png"></Image>
                    <Image col="4" row="0" @tap="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/icons/nav-home.png"></Image>
                </GridLayout>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        methods: {
			onButtonTap() {
				console.log("Button was pressed");
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
</style>
