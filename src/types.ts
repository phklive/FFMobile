export type category = {
	id: number
	title: string
	image: string
	tag: string
}

export type product = {
	id: number
	title: string
	price: number
	image: string
}

export type gameMode = {
	id: number
	title: string
	numPlayers: number
}

export type notification = {
	id: string
	title: string
	text: string
	image: string
}

export type setting = {
	icon: string
	color: string
	text: string
	onPress: () => void
}
