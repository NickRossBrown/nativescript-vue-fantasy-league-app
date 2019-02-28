<template>
    <FlexboxLayout class="card" justifyContent="space-between" :class="{'active':(index == active), 'inactive':(index != active)}"
        @tap="goToMember(member)">
        <AbsoluteLayout width="100%" height="100%">
            <Image src="~/assets/icons/box-shadow.png" height="100%" width="100%"
                class="background" />
            <FlexboxLayout flexDirection="column" width="96%" height="97%"
                padding="10 10 10 10">
                <StackLayout orientation="vertical" class="head">
                    <Label :text="member.name" class="title bold" />
                    <Label :text="member.type" class="subTitle semi-bold" />
                    <FlexboxLayout flexDirection="row" height="12" marginTop="4">
                        <Image src="~/assets/icons/Star-Red.png" v-for="star in member.stars"
                            :key="star" marginRight="4" />
                        <Image src="~/assets/icons/Star-grey.png" v-for="star in (5 - member.stars)"
                            :key="(star * 10)" marginRight="4" />
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout orientation="vertical" :backgroundImage="'~/assets/media/' + member.media"
                    height="58%" width="100%" class="img">
                </StackLayout>
            </FlexboxLayout>
        </AbsoluteLayout>
    </FlexboxLayout>
</template>
<script>
    import Member from "./Member";

    export default {
        props: {
            member: {
                type: Object
            },
            index: {
                type: Number
            },
            active: {
                type: Number
            }
        },

        methods: {
            goToMember(member) {
                console.log("card")
                console.log(Member)
                this.$navigateTo(Member, {
                    props: {
                        member: member
                    }
                });
            }
        },

        data() {
            return {};
        }
    };
</script>

<style scoped>
    .card .background {
        transform: scale(1.05);
        opacity: 0.75;
    }

    @keyframes highlight {
        from {
            transform: scale(0.85);
        }

        to {
            transform: scale(1);
        }
    }

    @keyframes downlight {
        from {
            transform: scale(1);
        }

        to {
            transform: scale(0.85);
        }
    }

    .card {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(0.85);
    }

    .card.active {
        animation-name: highlight;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }

    .card.inactive {
        animation-name: downlight;
        animation-duration: 0.25s;
        animation-fill-mode: backwards;
    }

    .card .head {
        border-radius: 14 14 0 0;
        background: #ffffff;
        padding: 12;
    }

    .card .img {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 0 0 14 14;
    }

    .card .title {
        color: #545454;
        font-size: 18;
    }

    .card .subTitle {
        color: #DADADA;
        font-size: 16;
    }
</style>