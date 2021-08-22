export default function ProductCount(context) {
	return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Products', ``).then((count) => {
        return count;
    });
}