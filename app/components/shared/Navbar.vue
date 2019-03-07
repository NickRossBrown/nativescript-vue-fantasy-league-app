<template>
	<StackLayout col="0" row="1" orientation="horizontal" height="60" class="navbar">
		<GridLayout rows="*" columns="*,*,*,*,*">
			<Image
				col="0"
				row="0"
				@tap="navToMembers()"
				height="35"
				width="35"
				margin="10"
				src="~/assets/icons/nav-users.png"
			></Image>
			<Image
				col="1"
				row="0"
				@tap="onButtonTap()"
				height="35"
				width="35"
				margin="10"
				src="~/assets/icons/nav-stats.png"
			></Image>
			<Image
				col="2"
				row="0"
				@tap="onButtonTap()"
				height="40"
				width="40"
				margin="10"
				src="~/assets/icons/nav-home.png"
			></Image>
			<Image
				col="3"
				row="0"
				@tap="onButtonTap()"
				height="35"
				width="35"
				margin="10"
				src="~/assets/icons/nav-file-text.png"
			></Image>
			<Image
				col="4"
				row="0"
				@tap="onButtonTap()"
				height="35"
				width="25"
				margin="10"
				src="~/assets/icons/nav-music.png"
			></Image>
		</GridLayout>
	</StackLayout>
</template>

<script>
    import Members from '../members/Index'
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
			navToMembers() {
				this.$navigateTo(Members, {
					transition: {
						name: "slideLeft",
						duration: 250,
						curve: "easeIn"
					}
				});
			}
		}
	};
</script>

<style scoped lang="scss">
	.navbar {
		background-color: rgb(222, 245, 237);
	}
</style>
