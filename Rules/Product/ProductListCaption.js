export default function ProductCatalogCaption(context) {
	let pageProxy = context.getPageProxy();
	var currentFilter = null;

	if (pageProxy.getControls().length > 0) {
		let filter = null;
		if (pageProxy.getControls()[0].getSections()[0]._context.element.observable()._currentFilter) {
			currentFilter = pageProxy.getControls()[0].getSections()[0]._context.element.observable()._currentFilter;
			console.log(currentFilter);
			filter = `$filter=${encodeURIComponent(currentFilter)}`;
			console.log(filter);
		}
		
		return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Products', ``).then((totalCount) => {
			return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Products', filter).then((count) => {
				let caption = null;
				if (count != totalCount) {
					caption = `Products (${count}/${totalCount})`;
				} else {
					caption = `Products (${count})`;
				}
				pageProxy.setCaption(caption);
				return caption;
			});
		});
	} else {
		return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Products', ``).then((count) => {
			let caption = `Products (${count})`;
			pageProxy.setCaption(caption);			
			return caption;
		});
	}
}