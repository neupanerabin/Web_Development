export default{
    name: 'product',
    type:'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: (Rule:any)=>Rule.required(),
        },
        {
            name: 'slug',
            type:'slug',
            option:{
                source: 'name',
            },
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'price',
            type: 'number',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'images',
            type: 'array',
            of:[
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'url',
                            type: 'url',
                            title: "URL",
                        },
                        {
                            name: 'file',
                            type: 'file',
                            title: 'file',
                        },
                    ],
                },
            ],
        },
        {
            name: 'isFeatured',
            type: 'string',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'isPopular',
            type: 'string',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'isisRecommended',
            type: 'string',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name:'category',
            type:'reference',
            to:[{type:'category'}],
            validation: (Rule:any) => Rule.required(),
        },
        {
            name:'quantity',
            type: 'number',
            validation: (Rule:any) => Rule.required().integer().min(1),

        },
        {
            name: 'description',
            type: 'text',
            validation: (Rule:any) => [
                Rule.required().min(10),
                Rule.custom((text:string)=>{
                    const wordCount = text.trim().split(/\s+/).length
                    if(wordCount) {
                        return `Product Description must have a minimum of 10 word. ${wordCount} /10`
                        
                    }
                    return true
                }),
            ],
        },
    ],
}