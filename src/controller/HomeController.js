import {
	GetMapping,
	RestController
} from 'yufeng-decorates';

@RestController
class HomeController {
	@GetMapping('/home')
	home() {
		return 'home';
	}
}