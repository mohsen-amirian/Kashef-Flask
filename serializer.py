
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


def process_serializer(process_list):
    final_list = []
    for process in process_list:
        temp_process = {}
        temp_process['id'] = process.id
        temp_process['name'] = process.name
        temp_process['package_name'] = process.package_name
        temp_process['description'] = process.description
        temp_process['json_file'] = process.json_file
        temp_process['creation_date'] = process.creation_date
        temp_process['last_modified_date'] = process.last_modified_date
        temp_process['is_deleted'] = process.is_deleted
        temp_process['image_address'] = process.image_address
        temp_process['is_approved'] = process.is_approved
        temp_process['user_id'] = process.user_id
        final_list.append(temp_process)

    return final_list
