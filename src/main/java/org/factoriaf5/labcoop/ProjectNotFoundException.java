package org.factoriaf5.labcoop;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "Project not found")
public class ProjectNotFoundException extends RuntimeException{

}
