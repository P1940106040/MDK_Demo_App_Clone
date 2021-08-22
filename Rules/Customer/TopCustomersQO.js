export default function TopCustomersQO(context) {
	return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Customers', '').then((count) => {
		let cd = context.getPageProxy().getClientData();
		var skip = 0;
		if (count && count > 4) {
			if (!cd.CustSkip) {
				cd.CustSkip = Math.round(Math.random() * (count-9));
			}
			skip = cd.CustSkip;
		}
        let qo = `$skip=${cd.CustSkip}&$top=4`;
        //let qo = `$skip=0&$top=4`;
		return qo;
	});
}