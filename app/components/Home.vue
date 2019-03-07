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
            <Navbar></Navbar>
        </GridLayout>
    </Page>
</template>

<script>
    import Navbar from './shared/Navbar'

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
        },
        components: {
            Navbar
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
