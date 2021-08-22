
export default function CustomerCount(context) {
	return context.count('/MDK_Demo_App_Clone/Services/ServiceName.service', 'Customers', ``).then((count) => {
        console.log(count);
        return count;
    });
}