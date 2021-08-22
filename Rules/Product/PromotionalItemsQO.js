export default function PromotionalItemsQO(context) {
	return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Products', '').then((count) => {
		let cd = context.getPageProxy().getClientData();
		var skip = 0;
		if (count && count > 11) {
			if (!cd.PromoSkip) {
				cd.PromoSkip = Math.round(Math.random() * (count-9));
			}
			skip = cd.PromoSkip;
		}
		let qo = `$skip=${cd.PromoSkip}&$top=10`;
		return qo;
	});
}