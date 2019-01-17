import {
	GetMapping,
	RestController
} from 'yufeng-decorates';

@RestController
class AdminController {
	result = {
		a: 11
	}
	@GetMapping('/admin')
	admin() {
		return 'xxxx';
	}
}