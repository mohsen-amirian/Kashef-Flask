
def category_serializer(category_list):
    final_list = []
    for category in category_list:
        temp_cat = {}
        temp_cat['id'] = category.id
        temp_cat['name'] = category.name
        final_list.append(temp_cat)
    return final_list

def module_serializer(module_list):
    final_list = []
    for module in module_list:
        temp_module = {}
        temp_module['id'] = module.id
        temp_module['name'] = module.name
        temp_module['codeName'] = module.code_name
        temp_module['description'] = module.description
        temp_module['webServiceUrl'] = module.web_service_url
        temp_module['webServiceType'] = module.web_service_type
        temp_module['imageAddress'] = module.image_address
        temp_module['iconAddress'] = module.icon_address
        temp_module['inputs'] = module.inputs
        temp_module['outputs'] = module.outputs
        temp_module['category_id'] = module.category_id
        final_list.append(temp_module)

    return final_list
