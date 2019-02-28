<template>
    <Page class="page" actionBarHidden="true">
        <StackLayout orientation="vertical">
            <AbsoluteLayout width="100%" height="100%">
                <FlexboxLayout flexDirection="column" height="100%" width="100%"
                    id="member">
     
                    <StackLayout width="100%" height="25" flexGrow="7">
                        <ScrollView orientation="vertical">
                            <StackLayout orientation="vertical">
                                <StackLayout orientation="vertical" class="head">
                                    <Label :text="member.name" class="title bold" />
                                    <Label :text="member.motto" class="subTitle semi-bold" />
                                    <Label class="subTitle semi-bold">Best Finnish: {{ member.bestFinnish }} </Label>

                                    <FlexboxLayout flexDirection="row" height="12"
                                        marginTop="4">
                                        <Image src="~/assets/icons/Star-Red.png"
                                            v-for="star in member.stars" :key="star"
                                            marginRight="4" />
                                        <Image src="~/assets/icons/Star-grey.png"
                                            v-for="star in (5 - member.stars)"
                                            marginRight="4" :key="(star * 10)" />
                                    </FlexboxLayout>
                                </StackLayout>
                                <AbsoluteLayout width="100%" height="210">
                                    <StackLayout id="sstar" top="0" left="0" :height="(210 - 20)"
                                        width="100%" :backgroundImage="'~/assets/media/' + member.media" class="image">
                                    </StackLayout>
                                    <StackLayout orientation="horizontal"
                                        height="40" class="actions" width="100%">
                                        <AbsoluteLayout width="40" height="40"
                                            class="ac-btn" id="star">
                                            <Image src="~/assets/icons/Star-White.png"
                                                width="15" height="15" left="12.5"
                                                top="12.5" />
                                        </AbsoluteLayout>
                                        <AbsoluteLayout width="40" height="40"
                                            class="ac-btn" id="plus">
                                            <Image src="~/assets/icons/Plus.png"
                                                width="15" height="15" left="12.5"
                                                top="12.5" />
                                        </AbsoluteLayout>
                                    </StackLayout>
                                </AbsoluteLayout>
                                <StackLayout id="pplus" orientation="vertical" class="text">
                                    <Label text="Lorem ipsum" class="title bold" />
                                    <TextView editable="false" marginBottom="25"
                                        class="desc semi-bold" padding="0">
                                        <FormattedString>
                                            <Span :text="lorem" />
                                        </FormattedString>
                                    </TextView>
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                    </StackLayout>
                  
                </FlexboxLayout>
            </AbsoluteLayout>
        </StackLayout>
    </Page>
</template>

<script>

    export default {
        props: {
            member: {
                type: Object,
                default: {
                    name: "test",
                    type: "type",
                    bestFinnish: "last",
                    stars: 4,
                    media: "placeholder1.jpeg"
                }
            }
        },
        data() {
            return {
                canBack: true,
                lorem: `Celeri discursantes optandi nobis nec praedam qui similes parvi aut similes umquam optandi poterat impetraverint si nobis rapiunt nec discursantes qui poterat rapacium nobis milvorum aut volatu nobis impetraverint impetraverint parvi momento volatu impetraverint qui celeri parvi nisi amici similes tamen optandi parvi discursantes impetraverint volatu non discursantes nisi.`
            };
        },

    };
</script>

<style scoped>
    .image {
        background-size: cover;
    }

    .desc {
        text-justify: justify;
        font-size: 14;
        color: #545454;
        background-color: transparent;
        border-color: transparent;
    }

    .text {
        margin: 0 25;
    }

    .text .title {
        margin-top: 8;
    }

    .text .desc {
        margin-top: 16;
    }

    .actions {
        z-index: 10;
        left: 0;
        top: 170;
        padding: 0 25;
    }



    .actions .ac-btn {
        border-radius: 100%;
        margin-right: 8;
        background: linear-gradient(-45deg, #ff067F, #ff0154);


    }

    .actions #star {

        opacity: 0;
        animation-name: bounceIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.75s;
    }

    .actions #plus {

        opacity: 0;
        animation-name: bounceIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }
     #pplus {

        opacity: 0;
        animation-name: bounceIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 1.25s;
    }
     #sstar {

        opacity: 0;
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.1s;
    }

    .header {
        margin: 25 10 10;
        height: 32;
    }

    .footer {
        margin: 10 50 10;
        height: 32;
    }

    .head {
        padding: 0 25;
        margin-bottom: 25;
        margin-top: 16;
        opacity: 0;
        animation-name: fadeInUp;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-delay: 0.25s;
    }

    .title {
        color: #545454;
        font-size: 28;
        margin-bottom: 4
    }

    .subTitle {
        color: #DADADA;
        font-size: 20;
        margin-bottom: 10
    }
</style>